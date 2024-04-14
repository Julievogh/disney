import Image from "next/image";
import Link from "next/link";

async function getBambi() {
  const res = await fetch("https://api.disneyapi.dev/characters/455");
  const data = await res.json();
  return data.data;
}

async function getBambisMother() {
  const res = await fetch("https://api.disneyapi.dev/characters/456");
  const data = await res.json();
  return data.data;
}

async function getBambisfather() {
  const res = await fetch("https://api.disneyapi.dev/characters/2823");
  const data = await res.json();
  return data.data;
}

async function thumberBambi() {
  const res = await fetch("https://api.disneyapi.dev/characters/6726");
  const data = await res.json();
  return data.data;
}

async function flowerBambi() {
  const res = await fetch("https://api.disneyapi.dev/characters/2385");
  const data = await res.json();
  return data.data;
}

async function owlBambi() {
  const res = await fetch("https://api.disneyapi.dev/characters/5085");
  const data = await res.json();
  return data.data;
}

export async function generateMetadata() {
  const bambiData = await getBambi();
  const bambisMotherData = await getBambisMother();
  const thumberData = await thumberBambi();
  const flowerData = await flowerBambi();
  const owlData = await owlBambi();
  const bambisFatherData = await getBambisfather();

  const {
    name: bambiName,
    _id: bambiId,
    films: bambiFilms,
    imageUrl: bambiImageUrl,
    videoGames: bambiVideoGames,
    sourceUrl: bambiSourceUrl,
  } = bambiData;
  const {
    name: motherName,
    _id: motherId,
    films: motherFilms,
    imageUrl: motherImageUrl,
    videoGames: motherVideoGames,
    sourceUrl: motherSourceUrl,
  } = bambisMotherData;
  const {
    name: thumberName,
    _id: thumberId,
    films: thumberFilms,
    imageUrl: thumberImageUrl,
    videoGames: thumberVideoGames,
    sourceUrl: thumberSourceUrl,
  } = thumberData;
  const {
    name: flowerName,
    _id: flowerId,
    films: flowerFilms,
    imageUrl: flowerImageUrl,
    videoGames: flowerVideoGames,
    sourceUrl: flowerSourceUrl,
  } = flowerData;

  const {
    name: owlName,
    _id: owlId,
    films: owlFilms,
    imageUrl: owlImageUrl,
    videoGames: owlVideoGames,
    sourceUrl: owlSourceUrl,
  } = owlData;
  const {
    name: fatherName,
    _id: fatherId,
    films: fatherFilms,
    imageUrl: fatherImageUrl,
    videoGames: fatherVideoGames,
    sourceUrl: fatherSourceUrl,
  } = bambisFatherData;

  return {
    title: bambiName,
    description: `${bambiName} is a Disney Character from the film ${bambiFilms[0]}`,
    bambiId,
    bambiImageUrl,
    bambiVideoGames,
    bambiSourceUrl,
    motherName,
    motherId,
    motherImageUrl,
    motherVideoGames,
    motherSourceUrl,
    thumberName,
    thumberId,
    thumberImageUrl,
    thumberVideoGames,
    thumberSourceUrl,
    flowerName,
    flowerId,
    flowerImageUrl,
    flowerVideoGames,
    flowerSourceUrl,
    flowerFilms,
    owlName,
    owlId,
    owlImageUrl,
    owlVideoGames,
    owlSourceUrl,
    owlFilms,
    fatherName,
    fatherId,
    fatherImageUrl,
    fatherVideoGames,
    fatherSourceUrl,
    fatherFilms,
  };
}

export default async function BambiPage() {
  const bambiData = await getBambi();
  const {
    name: bambiName,
    _id: bambiId,
    films: bambiFilms,
    imageUrl: bambiImageUrl,
    videoGames: bambiVideoGames,
    sourceUrl: bambiSourceUrl,
  } = bambiData;

  const motherData = await getBambisMother();
  const {
    name: motherName,
    _id: motherId,
    films: motherFilms,
    imageUrl: motherImageUrl,

    sourceUrl: motherSourceUrl,
  } = motherData;

  const thumberData = await thumberBambi();
  const {
    name: thumberName,
    _id: thumberId,
    films: thumberFilms,
    imageUrl: thumberImageUrl,
    videoGames: thumberVideoGames,
    sourceUrl: thumberSourceUrl,
  } = thumberData;

  const flowerData = await flowerBambi();
  const {
    name: flowerName,
    _id: flowerId,
    films: flowerFilms,
    imageUrl: flowerImageUrl,
    videoGames: flowerVideoGames,
    sourceUrl: flowerSourceUrl,
  } = flowerData;

  const owlData = await owlBambi();
  const {
    name: owlName,
    _id: owlId,
    films: owlFilms,
    imageUrl: owlImageUrl,
    videoGames: owlVideoGames,
    sourceUrl: owlSourceUrl,
  } = owlData;

  const fatherData = await getBambisfather();
  const {
    name: fatherName,
    _id: fatherId,
    films: fatherFilms,
    imageUrl: fatherImageUrl,
    videoGames: fatherVideoGames,
    sourceUrl: fatherSourceUrl,
  } = fatherData;

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <div className="m-4">
        <h1 className="text-3xl">My name is {bambiName}</h1>
        <Image src={bambiImageUrl} alt={bambiName} width={3024} height={4032} className="w-64 mt-8 mb-6" />
        <p>
          I was in some films called: {bambiFilms.slice(0, 3).join(", ")}
          {bambiFilms.length > 3 ? ", among others..." : ""}
        </p>
        <p>
          I have been in video games, my favorit ones were: {bambiVideoGames.slice(0, 3).join(", ")}{" "}
          {bambiVideoGames.length > 3 ? " and many more..." : ""}
        </p>

        <h2 className="text-3xl mt-8">These are my parents: </h2>
        <div className="flex flex-row space-x-4 mb-6 mt-2">
          <div>
            <p> This is my mother: {motherName}</p>
            <Image src={motherImageUrl} alt={motherName} width={3024} height={4032} className="w-64 mt-8 mb-6" />
          </div>
          <div>
            <p>My father is known as: {fatherName}</p>
            <Image src={fatherImageUrl} alt={fatherName} width={3024} height={4032} className="w-64 mt-8 mb-6" />
          </div>
        </div>
        <h3 className="text-xl mt-8">These are my friends:</h3>
        <div className="flex flex-row space-x-4 mb-6 mt-2">
          <div>
            <p>{thumberName}</p>
            <Image src={thumberImageUrl} alt={thumberName} width={3024} height={4032} className="w-40" />
          </div>{" "}
          <div>
            <p>{flowerName}</p>
            <Image src={flowerImageUrl} alt={flowerName} width={3024} height={4032} className="w-40" />
          </div>
          <div>
            <p>{owlName}</p>
            <Image src={owlImageUrl} alt={owlName} width={3024} height={4032} className="w-40" />
          </div>
        </div>
        <p>My id is {bambiId}</p>
        <p>
          Read more about me on my Wiki page:{" "}
          <Link target="_blank" href={motherSourceUrl}>
            Wiki
          </Link>
        </p>
      </div>
    </main>
  );
}
