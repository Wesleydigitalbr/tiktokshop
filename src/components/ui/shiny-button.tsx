'use client'

/**
 * @author: @emerald-ui
 * @description: Shiny Button Component - A button with a shiny gradient effect
 * @version: 1.0.0
 * @date: 2026-02-11
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

const variants = {
  blue: 'bg-[linear-gradient(325deg,#0044ff_0%,#2ccfff_55%,#0044ff_90%)] shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] focus:ring-blue-400 dark:focus:ring-blue-500',
  gold: 'bg-[linear-gradient(325deg,#8B6914_0%,#A78B71_55%,#8B6914_90%)] shadow-[0px_0px_20px_rgba(167,139,113,0.5),0px_5px_5px_-1px_rgba(139,105,20,0.25),inset_4px_4px_8px_rgba(200,180,150,0.5),inset_-4px_-4px_8px_rgba(100,75,15,0.35)] focus:ring-[#A78B71] dark:focus:ring-[#A78B71]',
  green: 'bg-[linear-gradient(325deg,#166534_0%,#4ADE80_55%,#166534_90%)] shadow-[0px_0px_20px_rgba(74,222,128,0.5),0px_5px_5px_-1px_rgba(22,101,52,0.25),inset_4px_4px_8px_rgba(134,239,172,0.5),inset_-4px_-4px_8px_rgba(20,83,45,0.35)] focus:ring-green-400 dark:focus:ring-green-500',
}

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: keyof typeof variants
}

export default function ShinyButton({
  className,
  children = 'Shiny Day',
  variant = 'blue',
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={cn(
        'h-12 w-max rounded-sm border-none bg-size-[280%_auto] px-6 py-2 font-medium text-white transition-[background] duration-700 hover:bg-top-right focus:ring-offset-1 focus:ring-offset-white focus:outline-none focus-visible:ring-2 dark:focus:ring-offset-black',
        variants[variant],
        className
      )}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}
