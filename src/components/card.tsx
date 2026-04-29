import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

export const cardVariants = cva(
  'rounded-lg border border-solid border-gray-200 bg-white shadow-sm',
  {
    variants: {
      size: {
        none: '',
        md: 'p-5'
      }
    },
    defaultVariants: {
      size: 'none'
    }
  }
);

type cardProps = VariantProps<typeof cardVariants> &
  React.ComponentProps<'div'> & {
    as?: keyof React.JSX.IntrinsicElements;
  };

export default function Card({
  as = 'div',
  size,
  children,
  className,
  ...props
}: cardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props
    },
    children
  );
}
