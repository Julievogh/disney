// Fetch the data from the API
import Image from "next/image";
import Link from "next/link";

async function getBaloo() {
  const res = await fetch("https://api.disneyapi.dev/characters/450");
  const data = await res.json();
  return data.data;
}

async function getBagheera() {
  const res = await fetch("https://api.disneyapi.dev/characters/428");
  const data = await res.json();
  return data.data;
}

async function getMowgli() {
  const res = await fetch("https://api.disneyapi.dev/characters/4710");
  const data = await res.json();
  return data.data;
}

async function getLouie() {
  const res = await fetch("https://api.disneyapi.dev/characters/4031");
  const data = await res.json();
  return data.data;
}

export async function generateMetadata() {
  const balooData = await getBaloo();
  const bagheeraData = await getBagheera();
  const mowgliData = await getMowgli();
  const louieData = await getLouie();

  const {
    name: balooName,
    _id: balooId,
    films: balooFilms,
    imageUrl: balooImageUrl,
    videoGames: balooVideoGames,
    sourceUrl: balooSourceUrl,
  } = balooData;

  const {
    name: bagheeraName,
    _id: bagheeraId,
    films: bagheeraFilms,
    imageUrl: bagheeraImageUrl,
    videoGames: bagheeraVideoGames,
    sourceUrl: bagheeraSourceUrl,
  } = bagheeraData;

  const {
    name: mowgliName,
    _id: mowgliId,
    films: mowgliFilms,
    imageUrl: mowgliImageUrl,
    videoGames: mowgliVideoGames,
    sourceUrl: mowgliSourceUrl,
  } = mowgliData;

  const {
    name: louieName,
    _id: louieId,
    films: louieFilms,
    imageUrl: louieImageUrl,
    videoGames: louieVideoGames,
    sourceUrl: louieSourceUrl,
  } = louieData;

  return {
    balooName,
    balooId,
    balooFilms,
    balooImageUrl,
    balooVideoGames,
    balooSourceUrl,
    bagheeraName,
    bagheeraId,
    bagheeraFilms,
    bagheeraImageUrl,
    bagheeraVideoGames,
    bagheeraSourceUrl,
    mowgliName,
    mowgliId,
    mowgliFilms,
    mowgliImageUrl,
    mowgliVideoGames,
    mowgliSourceUrl,
    louieName,
    louieId,
    louieFilms,
    louieImageUrl,
    louieVideoGames,
    louieSourceUrl,
  };
}

export default async function BalooPage() {
  const balooData = await getBaloo();
  const { name, _id, films, imageUrl, videoGames, sourceUrl } = balooData;

  const bagheeraData = await getBagheera();
  const { name: bagheeraName, imageUrl: bagheeraImageUrl } = bagheeraData;

  const mowgliData = await getMowgli();
  const { name: mowgliName, imageUrl: mowgliImageUrl } = mowgliData;

  const louieData = await getLouie();
  const { name: louieName, imageUrl: louieImageUrl } = louieData;

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
          I have been in video games, my favorite ones were: {videoGames.slice(0, 3).join(", ")}{" "}
          {videoGames.length > 3 ? "and many more..." : ""}
        </p>
        <h3>These are my friends:</h3>
        <div>
          <ul>
            <li>{bagheeraName}</li>
            <Image src={bagheeraImageUrl} alt={bagheeraName} width={3024} height={4032} className="w-40" />
            <li>{mowgliName}</li>
            <Image src={mowgliImageUrl} alt={mowgliName} width={3024} height={4032} className="w-40" />
            <li>{louieName}</li>
            <Image src={louieImageUrl} alt={louieName} width={3024} height={4032} className="w-40" />
          </ul>
        </div>
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
