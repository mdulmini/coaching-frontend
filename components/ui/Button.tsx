import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'green' | 'outline'
  loading?: boolean
  children: ReactNode
}

export function Button({
  variant = 'dark',
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'w-full h-[52px] rounded-full text-[15px] font-medium flex items-center justify-center gap-2.5 transition-all duration-150 active:scale-[0.98] select-none'

  const variants = {
    dark: 'bg-[#1C3A1C] text-white hover:bg-[#254f25]',
    green: 'bg-[#5DC93E] text-[#1C3A1C] hover:bg-[#50b535]',
    outline: 'bg-white border border-[#E5E5E5] text-[#1a1a1a] hover:bg-[#fafafa]',
  }

  return (
    <button
      className={cn(base, variants[variant], disabled && 'opacity-50 cursor-not-allowed', className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        children
      )}
    </button>
  )
}