import Link from "next/link";

export default async function Header() {
  const url = "https://api.disneyapi.dev/characters/140";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <header>
      <nav>
        <ul className="font-medium flex flex-col p-6 md:p-0 mt-6 ml-8 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="text-lg py-2">
            <Link href={"/"} prefetch={false}>
              Home
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href={"/airbud"} prefetch={false}>
              Airbud
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href={"/baloo"} prefetch={false}>
              Baloo
            </Link>
          </li>

          <li className="text-lg py-2">
            <Link href={"/aladdin"} prefetch={false}>
              Aladdin
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href={"/bambi"} prefetch={false}>
              Bambi
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
