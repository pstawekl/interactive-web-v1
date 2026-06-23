import * as React from 'react';

export interface FeatureRowProps {
  children?: React.ReactNode;
  /** Override the ✓ glyph. */
  icon?: React.ReactNode;
  /** Render as a not-included / disabled row. */
  muted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** Checklist line with a gradient check chip, for pricing / package feature lists. */
export function FeatureRow(props: FeatureRowProps): JSX.Element;
