import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/moderator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/moderator"!</div>
}
