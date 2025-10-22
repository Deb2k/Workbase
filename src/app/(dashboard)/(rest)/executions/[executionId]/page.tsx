import { requireAuth } from "@/lib/auth-utils"

interface PageProps{
    params: Promise<{executionId:string}>
}

const page = async ({params}:PageProps) => {
const {executionId} = await params
await requireAuth()
  return (
    <div>
      execution id: {executionId}
    </div>
  )
}

export default page
