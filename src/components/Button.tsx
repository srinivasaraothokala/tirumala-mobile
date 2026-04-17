'use client';

import React from 'react';
import { cn } from '../utils/cn'; // optional helper (explained below)


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none active:scale-95";

  const variants = {
    primary:
      "bg-[#E53935] text-white hover:bg-[#c62828]",
    secondary:
      "bg-[#FBC02D] text-gray-900 hover:bg-[#f9b107]",
    outline:
      "border border-gray-300 text-gray-800 hover:border-gray-900 hover:bg-gray-50",
    ghost:
      "text-gray-700 hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;