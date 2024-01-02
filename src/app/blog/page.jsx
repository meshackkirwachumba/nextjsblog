import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// FETCH DATA USING API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  //FETCH DATA USING API
  // const posts = await getData();

  // FETCH DATA WITHOUT API
  const posts = await getPosts();
  return (
    <div className="flex flex-wrap gap-5 ">
      {posts.map((post) => (
        <div key={post.id} className="w-full sm:w-[45%] lg:w-[30%]">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
