import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, generateLocalBusinessSchema, StructuredDataScript } from '@/lib/structured-data';
import StronyInternetoweZdunskaWolaView from '@/views/strony-internetowe-zdunska-wola';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/strony-internetowe-zdunska-wola')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Strony internetowe Zduńska Wola', url: `${baseUrl}/strony-internetowe-zdunska-wola` },
  ]);

  return (
    <>
      <SEOHead
        title="Strony Internetowe Zduńska Wola - Tworzenie i Projektowanie WWW | Interactive"
        description="Szukasz profesjonalnych stron internetowych w Zduńskiej Woli? Interactive oferuje nowoczesne, szybkie i responsywne projektowanie stron www, które pomogą Twojej firmie zaistnieć online. Skontaktuj się po darmową wycenę!"
        keywords="strony internetowe Zduńska Wola, tworzenie stron www Zduńska Wola, projektowanie stron internetowych Zduńska Wola, agencja interaktywna Zduńska Wola, responsywne strony www, optymalizacja SEO Zduńska Wola"
        ogUrl={`${baseUrl}/strony-internetowe-zdunska-wola`}
      />
      <StructuredDataScript schemas={[localBusinessSchema, breadcrumbSchema]} />
      <StronyInternetoweZdunskaWolaView />
    </>
  );
}
