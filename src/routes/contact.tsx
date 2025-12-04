import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, StructuredDataScript } from '@/lib/structured-data';
import Contact from '@/views/contact';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Kontakt', url: `${baseUrl}/contact` },
  ]);

  return (
    <>
      <SEOHead
        title="Kontakt | Interactive - Strony Internetowe Zduńska Wola"
        description="Skontaktuj się z nami! Tworzymy profesjonalne strony internetowe w Zduńskiej Woli. Otrzymaj darmową wycenę swojej strony www. Telefon: +48 518 275 470, Email: jakub.stawski@interactive.net.pl"
        keywords="kontakt, darmowa wycena, strony internetowe Zduńska Wola, tworzenie stron www Zduńska Wola"
        ogUrl={`${baseUrl}/contact`}
      />
      <StructuredDataScript schemas={[breadcrumbSchema]} />
      <Contact />
    </>
  );
}
