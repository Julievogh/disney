import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Disney",
  description: "Data about Disney characters",
};

export default async function Home() {
  const imageUrl = "https://static.wikia.nocookie.net/disney/images/3/3c/Buddy_%28Air_Bud%29.png";

  return (
    <main>
      <h1>Hello world!</h1>
      <Link href={"/tommi"} prefetch={false}>
        Link to Tommi
      </Link>
      <Link href={"/henry"} prefetch={false}>
        Link to Henry
      </Link>
      <Link href={"/pete"} prefetch={false}>
        Link to Pete
      </Link>

      <img src={imageUrl} alt="air bud" />
    </main>
  );
}
