import React from "react";
import Image from "next/image";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <main className="main flex flex-col items-center justify-center p-24 relative">
      <section className="flex h-full items-center justify-center flex-col z-10 gap-3">
        <h1 className="text-lg  text-white text-center md:text-2xl font-bold">
          Welcome To Our Food Recipe Finder{" "}
        </h1>
        <p className="text-white text-center text-base max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit
          rem hic ipsa? Tenetur aperiam ratione libero ab saepe reiciendis
          dolore excepturi obcaecati omnis suscipit, debitis eos deleniti maxime
          ut?
        </p>
        <Link
          href={"/recipes"}
          className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-700"
        >
          Go Search
        </Link>
      </section>
      <Image
        src={`/assets/images/backGround_image.jpg`}
        alt="background image"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "100%" }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-35"></div>
    </main>
  );
};
export default Home;
