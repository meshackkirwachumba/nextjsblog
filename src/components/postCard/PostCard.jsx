import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div
      className="
       flex
       flex-col
       gap-5
       mb-5
       p-3
      "
    >
      {/* top */}
      <div className="flex relative">
        <div className="relative h-[300px] w-[90%]">
          <Image src="/contact.png" alt="" fill className="object-cover" />
        </div>
        <span className="w-[10%] text-xs absolute top-3 right-5 rotate-45 m-auto">
          01.01.2024
        </span>
      </div>

      {/* bottom */}
      <div>
        <h1 className="text-2xl mb-5 w-[90%] line-clamp-1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </h1>
        <p className="text-gray-400 font-thin w-[90%] mb-5 line-clamp-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
        </p>
        <Link className="underline" href="/blog/123">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
