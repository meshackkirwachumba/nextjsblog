import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back</Link>
    </div>
  );
};

export default NotFound;
