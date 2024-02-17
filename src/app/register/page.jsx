import Image from "next/image";

function page() {
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">or Login with provider</div>
        <button className="flex justify-center gap-4">
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with google</button>
      </form>
      <div>
      </div>
    </section>
  );
}

export default page;
