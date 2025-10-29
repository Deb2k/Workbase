import WorkflowsList, { WorkflowsContainer } from '@/featers/workflows/components/workflows'
import { workflowsparamsLoader } from '@/featers/workflows/server/params-loader'
import { prefetchWorkflows } from '@/featers/workflows/server/prefetch'
import { requireAuth } from '@/lib/auth-utils'
import { HydrateClient } from '@/trpc/server'
import type { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'
import {ErrorBoundary} from "react-error-boundary"

type Props ={
   searchParams:Promise<SearchParams>
}

export default async function page({searchParams}:Props) {
  await requireAuth()

  const params = await workflowsparamsLoader(searchParams)

  prefetchWorkflows(params)

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
