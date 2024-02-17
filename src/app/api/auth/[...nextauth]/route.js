import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {User} from "@/app/api/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        id: "credentials",
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // console.log({credentials});
          const email = credentials?.email;
          const password = credentials?.password;

          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({email});
          const passwordIsOk = user && bcrypt.compareSync(password, user.password);
          if (passwordIsOk) {
            return user;
          }
          return null
        }
      })
  ]
})

export { handler as GET, handler as POST }