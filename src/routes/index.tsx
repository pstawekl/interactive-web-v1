import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, generateLocalBusinessSchema, generateServiceSchema, StructuredDataScript } from '@/lib/structured-data';
import Index from '@/views';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);
  const serviceSchema = generateServiceSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
  ]);

  return (
    <>
      <SEOHead
        title="Interactive – Profesjonalne Strony Internetowe Województwo Łódzkie | Tworzenie Stron WWW"
        description="Interactive – tworzenie stron internetowych w województwie łódzkim. Profesjonalne strony www dla firm z Łodzi, Sieradza, Zduńskiej Woli, Łasku i okolic. Nowoczesne, szybkie i responsywne strony internetowe. Skontaktuj się po darmową wycenę."
        keywords="strona internetowa Zduńska Wola, strony internetowe Zduńska Wola, strona internetowa Sieradz, strona internetowa Łódź, strona internetowa Łask, tworzenie stron internetowych województwo łódzkie, projektowanie stron www łódzkie, strony www, strony internetowe"
        ogUrl={baseUrl}
      />
      <StructuredDataScript schemas={[localBusinessSchema, serviceSchema, breadcrumbSchema]} />
      <Index />
    </>
  );
}
