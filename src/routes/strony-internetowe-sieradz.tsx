import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, generateLocalBusinessSchema, StructuredDataScript } from '@/lib/structured-data';
import StronyInternetoweSieradzView from '@/views/strony-internetowe-sieradz';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/strony-internetowe-sieradz')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Strony internetowe Sieradz', url: `${baseUrl}/strony-internetowe-sieradz` },
  ]);

  return (
    <>
      <SEOHead
        title="Strony Internetowe Sieradz - Tworzenie i Projektowanie WWW | Interactive"
        description="Szukasz profesjonalnych stron internetowych w Sieradzu? Interactive oferuje nowoczesne, szybkie i responsywne projektowanie stron www dla firm z Sieradza i okolic. Skontaktuj się po darmową wycenę!"
        keywords="strony internetowe Sieradz, tworzenie stron www Sieradz, projektowanie stron internetowych Sieradz, agencja interaktywna Sieradz, responsywne strony www, optymalizacja SEO Sieradz"
        ogUrl={`${baseUrl}/strony-internetowe-sieradz`}
      />
      <StructuredDataScript schemas={[localBusinessSchema, breadcrumbSchema]} />
      <StronyInternetoweSieradzView />
    </>
  );
}
