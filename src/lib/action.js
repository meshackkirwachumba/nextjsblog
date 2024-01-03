"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDatabase } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    //connect to db
    connectToDatabase();
    const post = await Post.create({
      title,
      desc,
      slug,
      userId,
    });

    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    //connect to db
    connectToDatabase();
    const post = await Post.findByIdAndDelete(id);

    console.log("post deleted");

    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

//login
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const registerUser = async (formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      img,
    });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const loginUserWithCredentials = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
