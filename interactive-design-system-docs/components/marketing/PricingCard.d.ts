import * as React from 'react';

export interface PricingCardProps {
  name: React.ReactNode;
  /** Numeric price (gradient digits). */
  price: number | string;
  currency?: string;
  /** e.g. "od" (from). Set to '' to hide. */
  priceLabel?: string;
  /** e.g. "/ projekt" or "/ mies." */
  period?: React.ReactNode;
  description?: React.ReactNode;
  /** Highlighted tier: gradient border + glow + lift + ribbon. */
  featured?: boolean;
  /** Ribbon text (defaults to "Najpopularniejszy" when featured). */
  badge?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** FeatureRow list. */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Pricing / package tier card. Compose the feature list with <FeatureRow>.
 * @startingPoint section="Marketing" subtitle="Pricing tier (featured + standard)" viewport="700x460"
 */
export function PricingCard(props: PricingCardProps): JSX.Element;
