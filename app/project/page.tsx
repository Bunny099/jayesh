import ProjectCard from "../components/projectcard";
export default function Projects() {
  return (
    <>
      <div className="h-[250px] md:h-[300px] w-full themebg flex items-center pl-6 md:pl-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Work</h1>
      </div>

  
      <div className="bg-black min-h-screen w-full px-4 sm:px-8 md:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="TimeWise"
            description="Track project work hours with start/end times, manage entries, and generate reports. Built with Next.js, Prisma, and PostgreSQL."
            image="timewise.png"
            btnLink="https://timewise-beta.vercel.app"
            btnText="Visit"
          />

          <ProjectCard
            title="Keshav-Digital"
            description="Business site with product showcase, inquiry form, and admin panel to manage products and export inquiries. Built with Next.js and PostgreSQL."
            image="keshav.png"
            btnLink="https://keshav-digital.vercel.app"
            btnText="Visit"
          />

          <ProjectCard
            title="Jayesh-Portfolio site"
            description="An Arabic online learning platform that offers courses in different programing languages."
            image="timewise.png"
            btnLink="https://timewise-beta.vercel.app"
            btnText="Visit"
          />
        </div>
      </div>
    </>
  );
}
