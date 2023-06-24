// @ts-nocheck
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // For custom email and password form signing
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          await connect();
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const pwdCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (pwdCorrect) {
              return user;
            } else {
              throw new Error("Wrong password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
