import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDatabase } from "./utils";
import { User } from "./models";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log("user", user);
      // console.log("account", account);
      // console.log("profile", profile);

      if (account?.provider === "github") {
        connectToDatabase();

        try {
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            await User.create({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
  },
});
