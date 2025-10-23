import {betterAuth} from 'better-auth'
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from './db'
import {checkout, polar, portal} from '@polar-sh/better-auth'
import { polarclient } from './polar'

export const auth = betterAuth({
    database:prismaAdapter(prisma,{
        provider:"postgresql"
    }),
    emailAndPassword:{
        enabled:true,
        autoSignIn:true,  //automatically signs in the user once they register
    },
    plugins:[
        polar({
            client:polarclient,
            createCustomerOnSignUp:true,
            use:[
                checkout({
                    products:[
                        {
                            productId:"7c08e1ee-e9f9-4836-aff0-019253e761fa",
                            slug:"pro",
                        },
                        ],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly:true,
                }),
                portal(),
            ]
        })
    ]

})