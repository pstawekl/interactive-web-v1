import { SEOHead } from '@/components/seo-head'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SEOHead
        title="Dashboard | Interactive"
        description="Panel administracyjny Interactive."
        keywords=""
        noindex={true}
      />
      <div>Hello "/dashboard"!</div>
    </>
  )
}
