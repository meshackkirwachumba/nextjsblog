import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className="flex w-full lg:gap-[100px] md:gap-7">
      {/* img container */}
      <div className="relative hidden md:block md:w-1/3 h-[80vh]">
        <Image
          src="/hero.gif"
          className="hidden md:block object-cover"
          alt="blog image"
          fill
        />
      </div>

      {/* text container */}
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">
          Hello Title is something great and you are doing great
        </h1>
        <div className="flex gap-5 w-full ">
          <Image
            src="/noavatar.png"
            className="object-cover rounded-full"
            alt="blog image"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Author</span>
            <span>Meshack Kirwa</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Published</span>
            <span>00/00/000</span>
          </div>
        </div>
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
