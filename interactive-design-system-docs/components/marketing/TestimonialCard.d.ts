import * as React from 'react';

export interface TestimonialCardProps {
  text: React.ReactNode;
  name: string;
  role?: React.ReactNode;
  /** 0–5 filled stars. */
  rating?: number;
  /** Optional avatar image URL; falls back to initials on a gradient chip. */
  avatar?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Client quote card with star rating and name/role. */
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
