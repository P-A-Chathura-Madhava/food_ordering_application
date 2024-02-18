"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const session = useSession();
  // console.log(session);
  const status = session.status;

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link className="text-2xl font-semibold text-primary" href={"/"}>
          CTECH Foods
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 font-semibold text-gray-500">
        {status === "authenticated" && (
          <button
            className="px-6 py-2 text-white rounded-full bg-primary"
            onClick={()=>signOut()}
          >
            Logout
          </button>
        )}
        {status === "unauthenticated" && (
          <>
            <Link
              className="px-6 py-2 text-white rounded-full bg-primary"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="px-6 py-2 text-white rounded-full bg-primary"
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
