import WorkflowsList, { WorkflowsContainer } from '@/featers/workflows/components/workflows'
import { prefectWorkflows } from '@/featers/workflows/server/prefetch'
import { requireAuth } from '@/lib/auth-utils'
import { HydrateClient } from '@/trpc/server'
import { Suspense } from 'react'
import {ErrorBoundary} from "react-error-boundary"

export default async function page() {
  await requireAuth()

  prefectWorkflows()

  return (
   <WorkflowsContainer>
       <HydrateClient>
       <ErrorBoundary fallback={<p>Error!</p>}>
          <Suspense fallback={<p>loading....</p>}>
             <WorkflowsList/>
          </Suspense>
       </ErrorBoundary>
    </HydrateClient>
   </WorkflowsContainer>
  )
}
