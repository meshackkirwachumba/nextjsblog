"use server";

import { signIn, signOut } from "./auth";
import { Post } from "./models";
import { connectToDatabase } from "./utils";
import { revalidatePath } from "next/cache";

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
