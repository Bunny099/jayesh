import Link from "next/link";
import ServiceCard from "./servicecard";
import FollowCard from "./followcard";
import Button from "./button";
import TypeWriter from "./typewriter";

export default function Hero() {
  return (
    <>
       <div className="w-full min-h-screen flex items-center justify-start themebg px-4 md:px-20 py-12 ">
       
        <div className="max-w-4xl w-full">
          <TypeWriter />
          <p className="text-base md:text-xl text-white text-pretty transition-all duration-300 leading-relaxed mt-4">
            I design, build, and ship full-stack web apps that are fast,
            scalable, and beautifully crafted. <br />
            Blending logic with creativity, I turn complex problems into
            seamless digital experiences. <br />
            From backend systems to frontend finesse. I turn ideas into code
            that works.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={"project"}
              className="bg-black/15 font-medium px-8 py-2 hover:bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 rounded-3xl text-white transition-all duration-300"
            >
              See my work
            </Link>

            <Button type="primary" path="contact" text="Get in touch" />
          </div>
        </div>
      </div>

     
      <div className="h-full w-full bg-gradient-to-b from-[#1f1f1f] to-[#121212] flex flex-wrap items-start justify-center gap-8 p-4 md:p-8">
       
        <div className="bg-white/5 backdrop-blur-md w-full max-w-3xl rounded-2xl p-6 md:p-8 shadow-md transition-all duration-300">
          <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              serviceLink="services/fullstack"
              name="Full-stack dev"
              imagePath="code.svg"
              buttonText="Discover more"
            />
            <ServiceCard
              serviceLink="services/frontend"
              name="Front-end dev"
              imagePath="code.svg"
              buttonText="Discover more"
            />
            <ServiceCard
              serviceLink="services/backend"
              name="Back-end dev"
              imagePath="code.svg"
              buttonText="Discover more"
            />
          </div>
        </div>

        
        <div className="bg-white/5 backdrop-blur-md w-full max-w-3xl md:max-w-xl rounded-2xl p-6 md:p-8 shadow-md transition-all duration-300">
          <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            Follow on
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FollowCard
              link="https://github.com/Bunny099"
              imagePath="github.svg"
              name="/Bunny099"
            />
            <FollowCard
              link="https://x.com/JayeshKhuman5"
              imagePath="x.svg"
              name="/jayeshkhuman5"
            />
            <FollowCard
              link="https://www.linkedin.com/in/jayesh-khuman-8476bb1a9/"
              imagePath="lnk.svg"
              name="/jayeshkhuman"
            />
          </div>
        </div>
      </div>
    </>
  );
}
