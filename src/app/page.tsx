import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";


export default async  function HomePage() {
     await requireAuth();
      
     const data =  await caller.getUsers()
     return (
      <div className="items-center justify-center p-2 text-xl font-extrabold min-h-s min-w-screen gap-y-6">
         Home page and protected server component
           
         <div className="flex flex-col gap-1 font-semibold text-blue-800">
            {JSON.stringify(data)}
         </div>
      </div>
  );
}
