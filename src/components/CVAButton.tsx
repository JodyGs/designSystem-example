import React from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ComponentProps<"button">;

const baseClasses =
  "font-inter font-semibold text-sm transition-all border-2 focus:outline-none focus:ring-2 focus:ring-offset-2";

const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      solid: "text-white border-transparent",
      outlined: "hover:text-white",
      ghost: "border border-transparent",
      soft: "border-transparent",
      link: "border-transparent",
      white: "text-gray-800 border-gray-200 hover:bg-gray-100",
    },
    size: {
      small: "py-2 px-3",
      default: "py-3 px-4",
      large: "py-4 px-5",
    },
    shape: {
      rounded: "rounded-md",
      pilled: "rounded-full",
    },
    color: {
      teal: "focus:ring-teal-500",
      blue: "focus:ring-blue-500",
      red: "focus:ring-red-500",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "default",
    shape: "rounded",
    color: "blue",
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "blue",
      class: "bg-blue-500 hover:bg-blue-600",
    },
    {
      variant: "outlined",
      color: "blue",
      class:
        "hover:bg-blue-500 text-blue-500 border-blue-500 hover:bg-blue-500",
    },
    {
      variant: "ghost",
      color: "blue",
      class: "text-blue-500 hover:bg-blue-100",
    },
    {
      variant: "soft",
      color: "blue",
      class: "bg-blue-100 text-blue-500",
    },
    {
      variant: "link",
      color: "blue",
      class: "text-blue-500 hover:text-blue-600",
    },
    {
      variant: "solid",
      color: "teal",
      class: "bg-teal-500 hover:bg-teal-600",
    },
    {
      variant: "outlined",
      color: "teal",
      class:
        "hover:bg-teal-500 text-teal-500 border-teal-500 hover:bg-teal-500",
    },
    {
      variant: "ghost",
      color: "teal",
      class: "text-teal-500 hover:bg-teal-100",
    },
    {
      variant: "soft",
      color: "teal",
      class: "bg-teal-100 text-teal-500",
    },
    {
      variant: "link",
      color: "teal",
      class: "text-teal-500 hover:text-teal-600",
    },
    {
      variant: "solid",
      color: "red",
      class: "bg-red-500 hover:bg-red-600",
    },
    {
      variant: "outlined",
      color: "red",
      class: "hover:bg-red-500 text-red-500 border-red-500 hover:bg-red-500",
    },
    {
      variant: "ghost",
      color: "red",
      class: "text-red-500 hover:bg-red-100",
    },
    {
      variant: "soft",
      color: "red",
      class: "bg-red-100 text-red-500",
    },
    {
      variant: "link",
      color: "red",
      class: "text-red-500 hover:text-red-600",
    },
  ],
});

export default function CVAButton({
  variant,
  color,
  size,
  shape,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        buttonVariants({ variant, color, size, shape }),
        className
      )}
    >
      CVAButton
    </button>
  );
}

// CVA regex: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/719#issuecomment-1446275879

/*
  Works for both single and double quotes
  ["cva\\(([\\s\\S]*?)\\)", "['\"]([^'\"]*)['\"]"]
*/
