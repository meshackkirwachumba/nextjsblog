import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        flex
        lg:gap-[100px]
        w-full
     "
    >
      {/* text Container */}
      <div
        className="
         lg:w-1/2
         w-full
         flex
         flex-col
         gap-[50px]
       "
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl break-words w-auto">
          Creative Thoughts Agency
        </h1>
        <p className="text-xl break-words w-auto ">
          Helping brands and businesses grow through creative thinking.
        </p>
        <div className="flex gap-5 flex-col sm:flex-row ">
          <button className="w-fit lg:min-w-[120px]  p-4 border-none rounded bg-[var(--btn)] text-[var(--text)]">
            Learn More
          </button>
          <button className="w-fit lg:min-w-[120px]  p-4 border-none rounded bg-[var(--text)] text-gray-500">
            Contact
          </button>
        </div>
        <div className="w-auto lg:w-[500px] h-[50px] relative">
          <Image src="/brands.png" alt="" fill className="grayscale" />
        </div>
      </div>

      {/* image container */}
      <div
        className="
         w-1/2
         relative
         hidden
         lg:flex
       "
      >
        <Image src="/hero.gif" alt="" fill className="hidden lg:block" />
      </div>
    </div>
  );
}
