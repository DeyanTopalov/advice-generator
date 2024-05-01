import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data: T = await response.json();
        setData(data);
        console.log("Fetched data:", data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Make url a dependency to refetch on url changes

  return { data, isLoading, error };
}

export default useFetch;

// type UseFetchProps = string; // Adjust to your specific options
