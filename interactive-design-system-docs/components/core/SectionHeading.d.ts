import * as React from 'react';

export interface SectionHeadingProps {
  /** Small mono uppercase label above the title. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Apply the brand gradient clip to the title (default true). */
  gradient?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The recurring marketing section header — eyebrow + gradient display title + muted description.
 * @startingPoint section="Core" subtitle="Gradient section header w/ eyebrow" viewport="700x240"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
