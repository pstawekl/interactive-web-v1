import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, StructuredDataScript } from '@/lib/structured-data';
import EcommerceView from '@/views/ecommerce';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ecommerce')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Sklepy Internetowe', url: `${baseUrl}/ecommerce` },
  ]);

  return (
    <>
      <SEOHead
        title="Sklepy Internetowe i E-commerce | Interactive"
        description="Tworzymy profesjonalne sklepy internetowe i platformy e-commerce dla firm z Zduńskiej Woli. Nowoczesne rozwiązania e-commerce z integracją płatności i zarządzaniem zamówieniami."
        keywords="sklepy internetowe, e-commerce, sklep online Zduńska Wola, platforma e-commerce, sklep internetowy"
        ogUrl={`${baseUrl}/ecommerce`}
      />
      <StructuredDataScript schemas={[breadcrumbSchema]} />
      <EcommerceView />
    </>
  );
}
