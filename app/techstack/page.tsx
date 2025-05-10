const techStack = [
  { name: "HTML", icon: "/html.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "ShadCN UI", icon: "/shadcn.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "TypeScript", icon: "/ts.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/express.svg" },
  { name: "WebSockets", icon: "/websocket.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "PostgreSQL", icon: "/postgres.svg" },
  { name: "Prisma", icon: "/prisma.svg" },
  { name: "MERN Stack", icon: "/react.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "AWS", icon: "/aws.svg" },
];
export default function TechStack() {
  return (
    <>
      <div className="h-[250px] md:h-[300px] w-full themebg flex items-center pl-6 md:pl-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Tech stack
        </h1>
      </div>

      <div className="min-h-screen w-full bg-gradient-to-b from-[#1f1f1f] to-[#121212] flex justify-center items-start px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 md:p-6 bg-[#1e1e1e] rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-6 md:h-7 filter invert"
              />
              <p className="text-white font-medium text-base md:text-lg">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
