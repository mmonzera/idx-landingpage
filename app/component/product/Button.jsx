"use client";
import clsx from "clsx";

const Button = (props) => {
  const { children, variant, className, onClick } = props;

  let variantClassName = "";
  if (variant === "square") {
    variantClassName = "rounded-lg";
  } else {
    variant === "rounded";
    variantClassName = "rounded-full";
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        "whitespace-nowrap border-[2px] border-[#1EA2EC] bg-white px-[8px] py-[4px] text-xs text-[#1EA2EC] sm:px-4 sm:py-3 sm:text-base",
        variantClassName,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
