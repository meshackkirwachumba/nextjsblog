import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "contact description",
};

const ContactPage = () => {
  return (
    <div
      className="
       flex
       md:gap-[100px]
       w-full
     "
    >
      {/* image container */}
      <div className="hidden md:block md:w-1/2 relative h-[500px] ">
        <Image
          src="/contact.png"
          height={400}
          width={500}
          alt="contact image"
          className="object-contain hidden md:block"
        />
      </div>

      {/* form container */}
      <div
        className="
         w-full
         md:w-1/2
         flex
         flex-col
         gap-12
       "
      >
        <form className="flex flex-col gap-5 p-5">
          <input
            className="p-4 rounded-sm border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className="p-4 rounded-sm border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 rounded-sm border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            type="text"
            placeholder="Phone Number (optional)"
          />
          <textarea
            className="p-4 rounded-sm border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            cols={30}
            rows={10}
            placeholder="Message"
          />
          <button className="w-fit px-4 py-3 border-none rounded bg-[var(--btn)] text-[var(--text)]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
