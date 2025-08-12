import Button from "./button";
import ProjectCard from "./projectcard";
export default function Feature() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#121212] w-full flex flex-col px-4 sm:px-8 md:px-20 py-12">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-10 text-center md:text-left transition-all duration-300">
        Featured work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
                    title="Officers"
                    description="Built Officers, a Next.js-based platform for a student-alumni trust with public resources and a secure admin panel, powered by NextAuth, Prisma, PostgreSQL, Tailwind, and Framer Motion."
                    image="officers.png"
                    btnLink="https://officers-three.vercel.app"
                    btnText="Visit"
                  />
        <ProjectCard
          title="TimeWise"
          description="Track project work hours with start/end times, manage entries, and generate reports. Built with Next.js, Prisma, and PostgreSQL."
          image="timewise.png"
          btnLink="https://timewise-beta.vercel.app"
          btnText="Visit"
        />

       

        <div className="flex items-center justify-center md:items-end md:justify-start p-4 md:p-0 transition-all duration-300">
          <Button text="Explore more" type="primary" path="project" />
        </div>
      </div>
    </div>
  );
}
