'use client'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ElementType, forwardRef, Ref, useRef } from 'react'
const typographyVariants = cva('', {
  variants: {
    fontFamily: {
      sans: 'font-sans'
    },
    size: {
      xs: 'text-xs sm:text-sm md:text-base lg:text-lg',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg sm:text-base  ',
      xl: 'text-xl sm:text-sm',
      '1xl': 'text-1xl ',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '5xl': 'text-5xl'
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold'
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      third: 'text-third'
    }
  },
  defaultVariants: {
    fontFamily: 'sans',
    size: 'base',
    weight: 'normal',
    color: 'primary'
  }
})
type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
} & VariantProps<typeof typographyVariants> &
  React.ComponentPropsWithoutRef<T>

const Typography = forwardRef(
  <T extends ElementType = 'p'>(
    { as, fontFamily, size, weight, color, className, children, ...props }: TypographyProps<T>,
    ref: Ref<HTMLParagraphElement>
  ) => {
    const Component = as || 'p'

    const typographyRef = useRef<HTMLParagraphElement | null>(null)

    const mergedRef = (el: HTMLParagraphElement) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) (ref as React.MutableRefObject<Element>).current = el
      typographyRef.current = el
    }

    return (
      <Component
        ref={mergedRef}
        className={cn(typographyVariants({ fontFamily, size, weight, color }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Typography.displayName = 'Typography'

export default Typography
