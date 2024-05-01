"use client";
import { DiceIcon } from "./ui/images";

const Button = () => {
  return (
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
      onClick={() => console.log("test")}
    >
      <DiceIcon />
    </button>
  );
};

export default Button;
