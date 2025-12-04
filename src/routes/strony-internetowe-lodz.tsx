import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, generateLocalBusinessSchema, StructuredDataScript } from '@/lib/structured-data';
import StronyInternetoweLodzView from '@/views/strony-internetowe-lodz';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/strony-internetowe-lodz')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Strony internetowe Łódź', url: `${baseUrl}/strony-internetowe-lodz` },
  ]);

  return (
    <>
      <SEOHead
        title="Strony Internetowe Łódź - Tworzenie i Projektowanie WWW | Interactive"
        description="Szukasz profesjonalnych stron internetowych w Łodzi? Interactive oferuje nowoczesne, szybkie i responsywne projektowanie stron www dla firm z Łodzi i województwa łódzkiego. Skontaktuj się po darmową wycenę!"
        keywords="strony internetowe Łódź, tworzenie stron www Łódź, projektowanie stron internetowych Łódź, agencja interaktywna Łódź, responsywne strony www, optymalizacja SEO Łódź"
        ogUrl={`${baseUrl}/strony-internetowe-lodz`}
      />
      <StructuredDataScript schemas={[localBusinessSchema, breadcrumbSchema]} />
      <StronyInternetoweLodzView />
    </>
  );
}
