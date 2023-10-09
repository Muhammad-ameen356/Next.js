import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const sessionData = await getServerSession(authOptions);
  return (
    <>
      <h1>Hello {sessionData && <span>{sessionData.user!.name}</span>}</h1>
      <Link href="/users">GO to User </Link>
    </>
  );
}
