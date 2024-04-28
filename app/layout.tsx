import type { Metadata } from "next";
import { manRope } from "./ui/fonts";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Advice-generator App",
  description: "Frontend Mentor challenge to build Advice-generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.className} bg-clr-grayish-800 text-clr-light-cyan grid h-svh w-svw place-content-center gap-0 text-[1.75rem] antialiased md:h-screen md:w-full`}
      >
        <main className="grid h-svh w-svw place-items-center px-4 md:max-w-[90rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
