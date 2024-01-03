import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH DATA USING API
// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA USING API
  // const user = await getUser(userId);

  // FETCH DATA WITHOUT API
  const user = await getUser(userId);
  return (
    <div className="flex  gap-4">
      <Image
        src={user?.img || "/noavatar.png"}
        className="object-cover rounded-full w-[50px] h-[50px]"
        alt="blog image"
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-1">
        <span className="text-gray-500">Author</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
