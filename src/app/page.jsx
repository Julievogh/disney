import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Disney",
  description: "Data about Disney characters",
};

export default async function Home() {
  const imageUrl = "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg";

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="h-auto max-w-lg rounded-lg p-6 text-white bg-sky-700 text-3xl ">Welcome to Disney!</h1>
        <img src={imageUrl} className="w-64 mt-1" alt="mickey" />
      </div>
    </main>
  );
}
