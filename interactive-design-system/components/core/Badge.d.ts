import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `gradient` = brand CTA fill; `brand` = soft purple tint. */
  variant?: 'neutral' | 'brand' | 'gradient' | 'success' | 'outline';
  children?: React.ReactNode;
}

/** Small uppercase status / category pill (mono label). */
export function Badge(props: BadgeProps): JSX.Element;
