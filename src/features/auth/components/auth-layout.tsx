import Link from "next/link"
import Image from "next/image"

export const Authlayout = ({children}:{children: React.ReactNode}) =>{
   return(
      <div className='bg-muted flex min-h-svh items-center flex-col justify-center gap-6 p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link href="/">
        <Image alt='Workbase logo' src="/logos/logo.svg" width={30} height={30} className='flex items-center gap-2 self-center font-medium'/>
         Workbase
        </Link>
        {children}
       </div>
     </div>
   )
}