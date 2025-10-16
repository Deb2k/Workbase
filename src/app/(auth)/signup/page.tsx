import RegisterForm from '@/featers/auth/components/register-from'
import { requireUnauth } from '@/lib/auth-utils'


export default async function page() {
 await requireUnauth()

  return (
    <div>
      <RegisterForm/>
    </div>
  )
}
