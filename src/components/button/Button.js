import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  full = false,
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 mt-auto rounded-lg capitalize ${bgClassName} ${
        full ? "w-full" : ""
      } ${className}`}
    >
      Watch now
    </button>
  );
};

export default Button;
