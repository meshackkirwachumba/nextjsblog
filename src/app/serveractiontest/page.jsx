import { addPost, deletePost } from "@/lib/action";

const ServerActionTest = () => {
  return (
    <div className="text-black flex flex-col gap-5">
      <form action={addPost} className="flex flex-col gap-5 w-2/3 mx-auto">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button className="bg-red-500 p-5">Create</button>
      </form>

      <form action={deletePost} className="flex flex-col gap-5 w-2/3 mx-auto">
        <input type="text" placeholder="id" name="id" />
        <button className="bg-red-500 p-5">Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
