import EcommerceView from '@/views/ecommerce'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ecommerce')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EcommerceView />
}
