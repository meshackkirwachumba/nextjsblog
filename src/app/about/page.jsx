import Image from "next/image";

const AboutPage = () => {
  return (
    <div
      className="
       w-full
       flex
       lg:gap-[100px]
     "
    >
      {/* text container  */}
      <div
        className="
         w-full
         lg:w-1/2
         flex
         flex-col
         gap-12
    
       "
      >
        <h2 className="text-[var(--btn)] font-semibold">About Agency</h2>
        <h1 className="text-5xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-thin">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in making brands that stand out from the crowd. With over a
          decade of design and development experience, we’re not afraid of
          telling the story. Let phone clicks, logo skewers, and social media
          trends combo into a sinewy web design which will impress your clients
          while being mindful of the designers inherited code.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] font-bold">10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] font-bold">10 K+</h1>
            <p>Projects</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--btn)] font-bold">10 K+</h1>
            <p>Clients</p>
          </div>
        </div>
      </div>

      {/* image container */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/about.png"
          alt="about"
          fill
          className="hidden lg:block object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;
