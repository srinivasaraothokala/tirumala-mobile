'use client';

// C:\Users\styli\tirumala-mobile\src\components\Button.tsx

import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Shows a spinner and disables interaction */
  loading?: boolean;
  /** Icon placed before the label */
  leftIcon?: React.ReactNode;
  /** Icon placed after the label */
  rightIcon?: React.ReactNode;
  /** Stretches button to full container width */
  fullWidth?: boolean;
  children: React.ReactNode;
}

// ─────────────────────────────────────────────
// Style Maps (outside component = no re-creation on every render)
// ─────────────────────────────────────────────
const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full ' +
  'transition-all duration-200 focus:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-offset-2 active:scale-95 select-none ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:   'bg-[#E53935] text-white hover:bg-[#c62828] focus-visible:ring-[#E53935]',
  secondary: 'bg-[#FBC02D] text-gray-900 hover:bg-[#f9a825] focus-visible:ring-[#FBC02D]',
  outline:   'border border-gray-300 text-gray-800 hover:border-gray-900 hover:bg-gray-50 focus-visible:ring-gray-400',
  ghost:     'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300',
  danger:    'bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-700',
};

const SIZES: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-1.5 text-sm  min-h-[36px]',
  md: 'px-6 py-2.5 text-sm  min-h-[44px]',
  lg: 'px-8 py-3.5 text-base min-h-[52px]',
};

// ─────────────────────────────────────────────
// Component — forwardRef lets parents attach a ref to the <button>
// e.g. for modals, tooltips, or auto-focus scenarios
// ─────────────────────────────────────────────
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = 'primary',
      size      = 'md',
      loading   = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      className,
      disabled,
      type = 'button',   // ✅ prevents accidental form submissions
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        className={cn(
          BASE,
          VARIANTS[variant],
          SIZES[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Spinner replaces leftIcon while loading */}
        {loading ? (
          <Loader2
            size={size === 'lg' ? 18 : 16}
            className="animate-spin shrink-0"
            aria-hidden="true"
          />
        ) : (
          leftIcon && (
            <span className="shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}

        {/* Label */}
        <span>{children}</span>

        {/* Right icon — hidden while loading */}
        {!loading && rightIcon && (
          <span className="shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;