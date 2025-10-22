
import {  baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({

  testAi: baseProcedure.mutation(async ()=>{
       await inngest.send({
        name:"execute/ai",
       })

       return {success:true, message:"Job queued"}
  }),


  getUsers: protectedProcedure.query(({ctx}) =>{
    console.log({userID: ctx.auth.user.id})

    return prisma.user.findMany({
      where:{
        id: ctx.auth.user.id,
      }
    })
  }),
  
});
// export type definition of API
export type AppRouter = typeof appRouter;