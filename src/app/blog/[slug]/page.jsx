import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import moment from "moment";
import Image from "next/image";
import { Suspense } from "react";

// FETCH DATA USING API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA USING API
  //const post = await getData(slug);

  // FETCH DATA WITHOUT API
  const post = await getPost(slug);

  return (
    <div className="flex flex-col md:flex-row w-full lg:gap-[100px] md:gap-9">
      {/* img container */}
      <div className="relative w-full  md:w-1/3 h-[40vh] md:h-[80vh]">
        <Image src={post.img} className="object-cover" alt="blog image" fill />
      </div>

      {/* text container */}
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <div className="flex gap-5 w-full first-line: ">
          <Image
            src={post?.img}
            className="object-cover rounded-full w-[50px] h-[50px]"
            alt="blog image"
            width={50}
            height={50}
          />

          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Published</span>
            <span>{moment(post?.createdAt).fromNow()}</span>
          </div>
        </div>
        <div>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
