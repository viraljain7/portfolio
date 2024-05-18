import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => {};
  otherClasses: string;
}) => {
  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(340deg,black,25%,#CBAAF9,55%,#fff)] bg-[length:200%_100%] mt-3 px-8 font-bold text-black  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses} gap-2 }`}
    >
      {position == "left" && icon}
      {title}
      {position == "right" && icon}
    </button>
  );
};

export default MagicButton;
