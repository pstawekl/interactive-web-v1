import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, generateLocalBusinessSchema, StructuredDataScript } from '@/lib/structured-data';
import StronyInternetoweLodzkieView from '@/views/strony-internetowe-lodzkie';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/strony-internetowe-lodzkie')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Strony internetowe województwo łódzkie', url: `${baseUrl}/strony-internetowe-lodzkie` },
  ]);

  return (
    <>
      <SEOHead
        title="Strony Internetowe Województwo Łódzkie - Tworzenie WWW | Interactive"
        description="Tworzenie profesjonalnych stron internetowych w województwie łódzkim. Obsługujemy firmy z Łodzi, Sieradza, Zduńskiej Woli, Łasku, Pabianic i całego regionu. Nowoczesne, szybkie strony www zoptymalizowane pod SEO. Skontaktuj się po darmową wycenę!"
        keywords="strony internetowe województwo łódzkie, strony www łódzkie, tworzenie stron internetowych łódzkie, agencja interaktywna łódzkie, strony internetowe Łódź, Sieradz, Zduńska Wola, Łask, Pabianice"
        ogUrl={`${baseUrl}/strony-internetowe-lodzkie`}
      />
      <StructuredDataScript schemas={[localBusinessSchema, breadcrumbSchema]} />
      <StronyInternetoweLodzkieView />
    </>
  );
}
