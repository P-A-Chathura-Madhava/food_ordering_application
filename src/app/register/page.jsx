"use client";
import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setUserCreated(true);        
      }else {
        setError(true);        
      }
      setCreatingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">User created.<br />Now you can <Link className="underline" href={"/login"}>Login &raquo;</Link></div>
      )}
      {error && (
        <div className="my-4 text-center">An error has occurred<br /> Try again later</div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button className="flex justify-center gap-4">
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with google
        </button>
      <div className="pt-4 my-4 text-center text-gray-500 border">Existing account? <Link className="underline" href={"/login"}>Login Here &raquo;</Link></div>
      </form>
    </section>
  );
}

export default page;
