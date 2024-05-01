import React from "react";

const Spinner = () => {
  return (
    <div className="relative flex size-24 items-center justify-center ">
      <p className="text-sm font-bold text-clr-light-cyan">Loading...</p>
      <div className="position absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-x-clr-light-cyan border-t-clr-light-cyan"></div>
    </div>
  );
};

export default Spinner;
