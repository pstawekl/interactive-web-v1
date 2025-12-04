import { SEOHead } from '@/components/seo-head';
import { generateBreadcrumbListSchema, StructuredDataScript } from '@/lib/structured-data';
import CoursesView from '@/views/courses';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
})

function RouteComponent() {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: 'Strona główna', url: baseUrl },
    { name: 'Kursy', url: `${baseUrl}/courses` },
  ]);

  return (
    <>
      <SEOHead
        title="Kursy Programowania i Szkolenia IT | Interactive"
        description="Profesjonalne kursy programowania i szkolenia IT w Zduńskiej Woli. Naucz się React, TypeScript, Node.js i innych technologii webowych. Praktyczne szkolenia dla początkujących i zaawansowanych."
        keywords="kursy programowania, szkolenia IT, kursy React, szkolenia web development, kursy programowania Zduńska Wola"
        ogUrl={`${baseUrl}/courses`}
      />
      <StructuredDataScript schemas={[breadcrumbSchema]} />
      <CoursesView />
    </>
  );
}
