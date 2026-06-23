import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `feature` = 2px border; `glass` = translucent blur overlay. */
  variant?: 'default' | 'feature' | 'glass' | 'elevated';
  /** Lift + brand-glow border on hover. */
  hoverable?: boolean;
  /** Inner padding in px. */
  padding?: number;
  children?: React.ReactNode;
}

/** Rounded (2xl) surface container with soft elevation; the base for feature, pricing and stat cards. */
export function Card(props: CardProps): JSX.Element;
