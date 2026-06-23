import * as React from 'react';

export interface StatCardProps {
  icon?: React.ReactNode;
  value: React.ReactNode;
  label: React.ReactNode;
  /** Gradient (CSS) for number + icon chip. */
  gradient?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Glassy metric card for the colored stat band (e.g. "45+ projektów"). */
export function StatCard(props: StatCardProps): JSX.Element;
