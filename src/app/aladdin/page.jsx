// Fetch the data from the API
import Image from "next/image";
import Link from "next/link";
async function getAladdin() {
  const res = await fetch("https://api.disneyapi.dev/characters/156");
  const data = await res.json();
  return data.data;
}

export async function generateMetadata() {
  const data = await getAladdin();
  const { name, _id, films, imageUrl, videoGames, sourceUrl } = data;

  return {
    title: name,
    description: `${name} is a Disney Character from the film ${films[0]}`,
    videoGames: videoGames,
    sourceUrl: sourceUrl,
  };
}

export default async function AladdinPage() {
  const data = await getAladdin();
  const { name, _id, films, imageUrl, videoGames, sourceUrl } = data;

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl">My name is {name}</h1>
        <Image src={imageUrl} alt={name} width={3024} height={4032} className="w-full" />
        <p>
          I was in some films called: {films.slice(0, 3).join(", ")}
          {films.length > 3 ? "among others..." : ""} and my id is {_id}
        </p>
        <p>
          I have been in video games, my favorit ones were: {videoGames.slice(0, 3).join(", ")}{" "}
          {videoGames.length > 3 ? "and many more..." : ""}
        </p>
        <p>
          Read more about me on my Wiki page:{" "}
          <Link target="_blank" href={sourceUrl}>
            Wiki
          </Link>
        </p>
      </div>
    </main>
  );
}
