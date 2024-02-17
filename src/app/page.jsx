import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import Navbar from "@/components/layout/Navbar";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="flex flex-col max-w-md gap-4 mx-auto mt-8 text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            incidunt a distinctio tempora similique explicabo, aliquam
            aspernatur consequuntur dolores temporibus sit, aliquid obcaecati
            nulla dolorem corporis? Ea eos provident delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            incidunt a distinctio tempora similique explicabo, aliquam
            aspernatur consequuntur dolores temporibus sit, aliquid obcaecati
            nulla dolorem corporis? Ea eos provident delectus.
          </p>          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            incidunt a distinctio.
          </p>
        </div>
      </section>
      <section className="my-8 text-center">
        <SectionHeaders subHeader={"Don't Hesitate"} mainHeader={"Contact Us"} />
        <div className="mt-8">
        <a className="text-4xl text-gray-500 underline" href="tel:+94111123246">+94 111 123 246</a>
        </div>
      </section>
      <footer className="p-8 mt-16 text-center text-gray-500 border-t">
        &copy; 2024 All Rights Reserved CTECH
      </footer>
    </>
  );
}
