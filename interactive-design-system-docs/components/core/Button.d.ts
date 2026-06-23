import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `interactive` is the brand gradient CTA. */
  variant?: 'default' | 'interactive' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** Size preset. */
  size?: 'sm' | 'default' | 'md' | 'lg' | 'icon';
  disabled?: boolean;
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action control. Use `interactive` (gradient) for the main CTA on a
 * surface, `outline`/`secondary` for secondary actions, `ghost` for toolbar/nav.
 *
 * @startingPoint section="Core" subtitle="Brand buttons — gradient CTA + variants" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
