import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva('font-sans text-gray-400', {
  variants: {
    variant: {
      'body-sm-bold': 'text-sm leading-5 font-semibold',
      'body-md': 'text-base leading-6 font-normal',
      'body-md-bold': 'text-base leading-6 font-semibold'
    }
  },
  defaultVariants: {
    variant: 'body-md'
  }
});

// Realiza agregação com VariantProps do cva
// Ao utilizar type VariantProp, obtém apenas o tipo e não toda a implementação
// OBS.: pode remover o type sem problemas
type TextProps = VariantProps<typeof textVariants> & {
  as?: keyof React.JSX.IntrinsicElements; // Mapeia cada tag HTML para o React
  className?: string;
  children?: React.ReactNode; // Conjunto de propriedades possíveis
};

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children
  );
}
