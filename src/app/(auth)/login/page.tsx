import LoginForm from '@/featers/auth/components/login-form'
import { requireUnauth } from '@/lib/auth-utils'
import React from 'react'

export default async function page() {
   await requireUnauth()
     
   return (
    <div>
      <LoginForm/>
    </div>
  )
}
