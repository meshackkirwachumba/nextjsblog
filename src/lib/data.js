import { Post, User } from "./models";
import { connectToDatabase } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "lorem ipsum dolor sit amet", userId: 1 },
//   { id: 2, title: "Post 2", body: "lorem ipsum dolor sit amet", userId: 1 },
//   { id: 3, title: "Post 3", body: "lorem ipsum dolor sit amet", userId: 2 },
//   { id: 4, title: "Post 4", body: "lorem ipsum dolor sit amet", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDatabase();

    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDatabase();

    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUsers = async () => {
  try {
    connectToDatabase();

    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

// unstable_noStore can be used to declaratively opt out of static rendering and indicate
// a particular component should not be cached.
//unstable_noStore is equivalent to cache: 'no-store' on a fetch
export const getUser = async (id) => {
  noStore();
  try {
    connectToDatabase();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
