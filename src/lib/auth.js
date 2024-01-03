import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDatabase();

    const existingUser = await User.findOne({ username: credentials.username });
    if (!existingUser) throw new Error("Wrong credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      existingUser.password
    );

    if (!isPasswordCorrect) throw new Error("Invalid credentials");

    return existingUser;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

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
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
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
