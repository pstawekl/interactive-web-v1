import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, StructuredDataScript } from '@/lib/structured-data';
import WebServicesView from '@/views/www';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/www')({
  component: WwwComponent,
})

function WwwComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Aplikacje Internetowe', url: `${baseUrl}/www` },
  ]);

  return (
    <>
      <SEOHead
        title="Aplikacje Internetowe i Strony WWW | Interactive"
        description="Tworzymy nowoczesne aplikacje internetowe i strony www dla firm z Zduńskiej Woli. Responsywne, szybkie i zoptymalizowane pod SEO. Skontaktuj się po darmową wycenę."
        keywords="aplikacje internetowe, strony www, aplikacje webowe Zduńska Wola, tworzenie aplikacji internetowych, strony internetowe Zduńska Wola"
        ogUrl={`${baseUrl}/www`}
      />
      <StructuredDataScript schemas={[breadcrumbSchema]} />
      <div>
        <WebServicesView />
      </div>
    </>
  )
}
