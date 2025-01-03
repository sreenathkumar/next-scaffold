import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@lib/db"
import { signInSchema } from "@lib/zod"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { verifyUser } from "./actions/verifyPassword"
import { authConfig } from "./auth.config"


export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider,
        FacebookProvider,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null

                    const { email, password } = await signInSchema.parseAsync(credentials)

                    // logic to verify if the user exists
                    user = await verifyUser({ email, password });

                    if (!user) {
                        throw new Error('Invalid credentials')
                    }

                    // return JSON object with the user data
                    return user
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        throw new Error(error.message || 'Unknown error')
                    } else {
                        throw new Error('Unknown error')
                    }
                }
            },
        }),
    ],
})