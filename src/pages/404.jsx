import { Link } from "../components/Link";

const Page404 = () => {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <img
          src="https://i.pinimg.com/originals/c0/4a/ae/c04aae1e761928f630eea80459347c2f.gif"
          alt="Gif del perro This is fine"
        />
      </div>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default Page404;
