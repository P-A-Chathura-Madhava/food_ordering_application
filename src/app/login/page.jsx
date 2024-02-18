"use client";
import Image from "next/image";
import { useState } from "react";
import {signIn} from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoginProgress(true);
    // const { ok } = await fetch("/api/login", {
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    // });
    
    await signIn("credentials", {email, password, callbackUrl: "/"});
    setLoginProgress(false);
  };

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit} /* action={"/api/auth"} method="POST" */>
        <input
            name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginProgress}
        />
        <input
            name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginProgress}
        />
        <button type="submit" disabled={loginProgress}>Login</button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button type="button" className="flex justify-center gap-4" onClick={()=>signIn("google", {callbackUrl: "/"})}>
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
