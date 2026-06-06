'use client'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  rightElement?: ReactNode
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightElement, error, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full h-[52px] rounded-2xl border bg-white text-[15px] text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-150',
              'border-[#E5E5E5] focus:border-[#5DC93E] focus:ring-2 focus:ring-[#5DC93E]/15',
              leftIcon ? 'pl-11 pr-4' : 'px-4',
              rightElement ? 'pr-12' : '',
              error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : '',
              className
            )}
            {...props}
          />
          {rightElement && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {rightElement}
            </span>
          )}
        </div>
        {error && <p className="text-xs text-red-500 pl-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'