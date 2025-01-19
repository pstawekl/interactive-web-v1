import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import WebServicesView from '@/views/www'

export const Route = createFileRoute('/www')({
  component: WwwComponent,
})

function WwwComponent() {
  return (
    <div className="p-2">
      <WebServicesView />
    </div>
  )
}
