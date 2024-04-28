import Image from "next/image";

export const DividerPattern = () => {
  return (
    <>
      <Image
        src="/pattern-divider-mobile.svg"
        width={295}
        height={16}
        alt="divider patter"
        className="block md:hidden"
      />
      <Image
        src="/pattern-divider-mobile.svg"
        width={444}
        height={16}
        alt="divider patter"
        className="hidden md:block"
      />
    </>
  );
};

export const DiceIcon = () => {
  return <Image src="/icon-dice.svg" width={24} height={24} alt="dice" />;
};
