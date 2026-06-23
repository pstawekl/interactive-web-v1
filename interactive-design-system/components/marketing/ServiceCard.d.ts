import * as React from 'react';

export interface ServiceCardProps {
  title: React.ReactNode;
  /** Feature icon node (lucide / react-icons) shown in a gradient chip. */
  icon?: React.ReactNode;
  /** Numeric "from" price. */
  price?: number | string;
  priceLabel?: string;
  currency?: string;
  description?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The offer / "Czego szukasz?" card — gradient title, icon chip, from-price, CTA.
 * @startingPoint section="Marketing" subtitle="Offer card with price + gradient CTA" viewport="700x420"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
