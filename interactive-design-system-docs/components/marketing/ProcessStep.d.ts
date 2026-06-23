import * as React from 'react';

export interface ProcessStepProps {
  number: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Numbered step card for the "Jak pracujemy" process timeline. */
export function ProcessStep(props: ProcessStepProps): JSX.Element;
