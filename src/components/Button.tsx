import React from "react";
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant?: "solid" | "outlined" | "ghost" | "soft" | "link" | "white";
  size?: "small" | "default" | "large";
  shape?: "rounded" | "pilled";
  color?: "teal" | "blue" | "red";
};

const baseClasses =
  "font-inter font-semibold text-sm transition-all border-2 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses: Record<
  Required<Props>["color"],
  Record<Required<Props>["variant"], string>
> = {
  teal: {
    solid:
      "text-white bg-teal-500 hover:bg-teal-600 border-transparent focus:ring-teal-500",
    outlined:
      "text-teal-500 border-teal-500 focus:ring-teal-500 hover:bg-teal-500 hover:text-white",
    ghost:
      "text-teal-500 border border-transparent focus:ring-teal-500 hover:bg-teal-100",
    soft: "bg-teal-100 border-transparent focus:ring-teal-500 text-teal-500",
    link: "text-teal-500 border-transparent focus:ring-teal-500 hover:text-teal-600",
    white:
      "text-gray-800 border-gray-200 focus:ring-teal-500 hover:bg-gray-100",
  },
  blue: {
    solid:
      "text-white bg-blue-500 hover:bg-blue-600 border-transparent focus:ring-blue-500",
    outlined:
      "text-blue-500 border-blue-500 focus:ring-blue-500 hover:bg-blue-500 hover:text-white",
    ghost:
      "text-blue-500 border border-transparent focus:ring-blue-500 hover:bg-blue-100",
    soft: "bg-blue-100 border-transparent focus:ring-blue-500 text-blue-500",
    link: "text-blue-500 border-transparent focus:ring-blue-500 hover:text-blue-600",
    white:
      "text-gray-800 border-gray-200 focus:ring-blue-500 hover:bg-gray-100",
  },
  red: {
    solid:
      "text-white bg-red-500 hover:bg-red-600 border-transparent focus:ring-red-500",
    outlined:
      "text-red-500 border-red-500 focus:ring-red-500 hover:bg-red-500 hover:text-white",
    ghost:
      "text-red-500 border border-transparent focus:ring-red-500 hover:bg-red-100",
    soft: "bg-red-100 border-transparent focus:ring-red-500 text-red-500",
    link: "text-red-500 border-transparent focus:ring-red-500 hover:text-red-600",
    white: "text-gray-800 border-gray-200 focus:ring-red-500 hover:bg-gray-100",
  },
};

const sizeClasses: Record<Required<Props>["size"], string> = {
  small: "py-2 px-3",
  default: "py-3 px-4",
  large: "py-4 px-5",
};

const shapeClasses: Record<Required<Props>["shape"], string> = {
  rounded: "rounded-md",
  pilled: "rounded-full",
};

export default function Button({
  className,
  variant = "solid",
  shape = "rounded",
  size = "default",
  color = "blue",
  children = "Button",
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        className,
        baseClasses,
        variantClasses[color][variant],
        sizeClasses[size],
        shapeClasses[shape]
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
