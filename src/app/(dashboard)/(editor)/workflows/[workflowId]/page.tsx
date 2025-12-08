interface PageProps{
    params: Promise<{workflowId:string}>
}

import { Editor, EditorError, EditorLoading } from '@/features/editor/components/editor'
import { EditorHeader } from '@/features/editor/components/editor-header'
import  { WorkflowsError, WorkflowsLoading } from '@/features/workflows/components/workflows'
import { prefetchWorkflow } from '@/features/workflows/server/prefetch'
import { requireAuth } from '@/lib/auth-utils'
import { HydrateClient } from '@/trpc/server'
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const page = async ({params}: PageProps) => {
    const {workflowId} = await params
    prefetchWorkflow(workflowId)
    await requireAuth()

    return (
    <HydrateClient>
       <ErrorBoundary fallback={<EditorError/>}>
          <Suspense fallback={<EditorLoading/>}>
          <EditorHeader workflowId={workflowId}/>
            <main className='flex-1'>
              <Editor workflowId={workflowId}/>
            </main>
          </Suspense>
       </ErrorBoundary>
       </HydrateClient>
  )
}

export default page
