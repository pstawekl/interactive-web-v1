import * as React from 'react';

export interface CaseCardProps {
  title: React.ReactNode;
  /** Eyebrow category badge over the visual (e.g. "E-commerce"). */
  category?: React.ReactNode;
  /** Headline result, gradient digits (e.g. "+280%"). */
  metric?: React.ReactNode;
  metricLabel?: React.ReactNode;
  description?: React.ReactNode;
  /** Screenshot URL. Falls back to a gradient panel with initials + icon. */
  image?: string;
  icon?: React.ReactNode;
  /** Gradient for the fallback panel. */
  gradient?: string;
  /** Tech / tag chips shown at the bottom. */
  tags?: React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Portfolio / case-study tile — visual header, category, headline metric, blurb, tech tags.
 * @startingPoint section="Marketing" subtitle="Case-study / portfolio card" viewport="700x420"
 */
export function CaseCard(props: CaseCardProps): JSX.Element;
