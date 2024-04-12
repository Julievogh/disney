import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Home",
  description: "Description",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
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

      <img src={data.message} alt="random dog" />
    </main>
  );
}
