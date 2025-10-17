import LoginForm from '@/featers/auth/components/login-form'
import { requireUnauth } from '@/lib/auth-utils'


export default async function page() {
   await requireUnauth()
     
   return <LoginForm/>
  
}
