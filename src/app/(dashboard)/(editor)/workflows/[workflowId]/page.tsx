interface PageProps{
    params: Promise<{workflowId:string}>
}

import { requireAuth } from '@/lib/auth-utils'
import React from 'react'

const page = async ({params}: PageProps) => {
    const {workflowId} = await params
    await requireAuth()
    return (
    <div>
      workflow id: {workflowId}
    </div>
  )
}

export default page
