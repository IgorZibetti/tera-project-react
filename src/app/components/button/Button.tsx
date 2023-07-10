import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disable?: boolean
  text?: string
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, text, disable, type, ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        transistion
        mt-5
        w-48
        rounded
        border
        border-transparent
        bg-black
        px-3
        py-3
        font-bold
        text-white
        hover:bg-green-700
        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
          className,
        )}
        // eslint-disable-next-line react/no-unknown-property
        text={text}
        disabled={disable}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
