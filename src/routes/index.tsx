import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Index from '../views'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return <Index />
}
