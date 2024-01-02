import PostCard from "@/components/postCard/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      <div className="w-full sm:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full sm:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
