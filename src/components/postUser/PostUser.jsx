import { getUser } from "@/lib/data";

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
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Author</span>
      <span>{user?.name}</span>
    </div>
  );
};

export default PostUser;
