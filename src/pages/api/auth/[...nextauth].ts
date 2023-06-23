import { loginFirebase } from '@/services/login';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, {
    pages: {
      signIn: '/admin/question',
      error: '/login',
      signOut: '/'
    },
    providers: [
      CredentialsProvider({
        id: 'credentials',
        type: 'credentials',
        credentials: {
          email: { label: 'email', type: 'email' },
          password: { label: 'password', type: 'password' },
        },

        async authorize(credentials, req)  {
          const { email, password } = credentials as {
            email: string,
            password: string
          }
        try {
            const user = await loginFirebase(email, password);
            if (user) {
                return {
                  id: user.uid,
                  email: user.email,
                  accessToken: user.uid
                }
            } else return null;
        } catch (error) {
            console.log(error)
        }
          return null;
        }
      })
    ],
    callbacks: {
        async jwt({ user, token }) {
            // console.log('user', user)
            // console.log('token', token)
            //   update token if user is returned
            if (user) {
              token.email = user.email;
              token.accessToken= user.id;
            }

            return token;
          },

          async session({ session, token, user}) {
            //  update session from token
            // console.log('Session', session)
            // console.log('token', token)
            if(session.user){
              let users: any;
              users = token.email;
              users = token.accessToken;
  
              return users;
            }else return null
          },
    },
  })
}