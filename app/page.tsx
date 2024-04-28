import { DividerPattern, DiceIcon } from "@components/ui/images";

export default function Home() {
  return (
    <section className="bg-clr-grayish-600 grid max-w-[33.75rem] place-items-center gap-6 rounded-xl px-6 md:rounded-2xl md:px-12">
      <div className="mt-10 md:mt-12">
        <h1 className="text-clr-neon-green text-xs font-extrabold">
          ADVICE <span className="pl-1"># 117</span>
        </h1>
      </div>
      <blockquote className="min-h-[8.25rem] font-extrabold md:mb-4">
        <q>
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action.
        </q>
      </blockquote>
      <div>
        <DividerPattern />
      </div>

      <button
        className="bg-clr-neon-green ring-clr-neon-green/75 -mt-4 flex size-16 translate-y-1/2 cursor-pointer items-center justify-center rounded-full ring-[1rem]  md:-mt-2"
        role="button"
        type="button"
        aria-label="suffle advice"
      >
        <DiceIcon />
      </button>
    </section>
  );
}

// update the button blur
