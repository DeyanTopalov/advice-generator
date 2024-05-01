"use client";
import { DividerPattern, DiceIcon } from "@components/ui/images";
import useFetch from "@lib/useFetch";

export default function Card() {
  const baseUrl = "https://api.adviceslip.com/advice/";
  const id = Math.floor(Math.random() * 100) + 1;
  const finalUrl = `${baseUrl}${id}`;

  const { data, isLoading, error } = useFetch<Advice>(finalUrl);
  console.log(finalUrl);

  return (
    <div className="grid max-w-[33.75rem] place-items-center gap-6 rounded-xl bg-clr-grayish-600 px-6 md:rounded-2xl md:px-12">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <div className="mt-10 md:mt-12">
            <h1 className="text-xs font-extrabold tracking-[0.2rem] text-clr-neon-green">
              ADVICE <span className="pl-1">{data?.slip.id}</span>
            </h1>
          </div>
          <blockquote className="min-h-[8.25rem] font-extrabold md:mb-4">
            <q>{data?.slip.advice}</q>
          </blockquote>
        </>
      )}
      <div>
        <DividerPattern />
      </div>
      {/* Cropped blur on Safari - fix: before:will-change-transform */}
      <button
        className="relative -mt-4 flex size-16 translate-y-1/2 cursor-pointer items-center  justify-center rounded-full  bg-clr-neon-green before:absolute before:inset-0 before:rounded-full before:bg-clr-neon-green
          before:opacity-0
          before:blur-xl
          before:transition-all
          before:duration-200 before:ease-in-out before:will-change-transform  hover:before:opacity-100
          md:-mt-2"
        role="button"
        type="button"
        aria-label="suffle advice"
      >
        <DiceIcon />
      </button>
    </div>
  );
}

//   <blockquote className="min-h-[8.25rem] font-extrabold md:mb-4">
//     <q>{`${advices.slip.advice}`}</q>
//   </blockquote>;

// <h1 className="text-xs font-extrabold tracking-[0.2rem] text-clr-neon-green">
//   ADVICE <span className="pl-1">{`# ${advices.slip.id}`}</span>
// </h1>;