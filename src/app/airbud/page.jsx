// Fetch the data from the API
import Image from "next/image";
async function getAirbud() {
  const res = await fetch("https://api.disneyapi.dev/characters/140");
  const data = await res.json();
  return data.data;
}

export async function generateMetadata() {
  const data = await getAirbud();
  const { name, _id, films, imageUrl } = data;

  return {
    title: name,
    description: `${name} is a Disney Character from the film ${films[0]}`, // Accessing the first film
    id: _id,
    imageUrl: imageUrl,
  };
}

export default async function AirbudPage() {
  const data = await getAirbud();
  const { name, _id, films, imageUrl } = data;

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl">My name is {name}</h1>
        <Image src={imageUrl} alt={name} width={3024} height={4032} className="w-full" />
        <p>
          I was in films called {films.slice(0, 3).join(", ")}
          {films.length > 3 ? "..." : ""} and my id is {_id}
        </p>
        <p>I am a Disney character</p>
      </div>
    </main>
  );
}
