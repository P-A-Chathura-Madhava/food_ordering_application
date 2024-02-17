import Image from "next/image";
import MenuItem from "./menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 justify-start w-full">
        <div className="absolute left-0 text-left -top-[70px] -z-10">
          <Image src={"/salad1.png"} alt={"salad"} width={192} height={192} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src={"/salad2.png"} alt={"salad"} width={192} height={192} />
        </div>
      </div>
      <div className="mb-4 text-center">
    <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
