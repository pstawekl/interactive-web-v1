import { SEOHead } from '@/components/seo-head'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SEOHead
        title="Zadania | Interactive"
        description="Panel zadań Interactive."
        keywords=""
        noindex={true}
      />
      <div>Hello "/tasks"!</div>
    </>
  )
}
