import RegisterForm from '@/features/auth/components/register-from'
import { requireUnauth } from '@/lib/auth-utils'


export default async function page() {
 await requireUnauth()

  return  <RegisterForm/>
}
