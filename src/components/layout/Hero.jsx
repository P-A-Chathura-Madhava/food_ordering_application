import Image from "next/image";
import Right from "../icons/Right";

function Hero() {
  return (
    <section className="hero">
        <div className="py-12">
      <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with tasty &nbsp;<span className="text-primary">Foods</span></h1>
      <p className="my-6 text-sm text-gray-500">
        Foods are the missing piexe that makes every day complete, a simple yet
        delicious joy in life
      </p>
      <div className="flex gap-4 text-sm">
        <button className="flex items-center gap-2 px-4 py-2 text-white uppercase rounded-full bg-primary">Order Now<Right /></button>
        <button className="flex gap-2 py-2 font-semibold text-gray-600">Learn More<Right /></button>
      </div>
        </div>
      <div className="relative">
      <Image src={"/rice.png"} alt={"Rice"} layout={"fill"} objectFit={"contain"} />
      </div>
    </section>
  );
}

export default Hero;
