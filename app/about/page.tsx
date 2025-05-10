export default function About() {
  return (
    <>
      <div className="h-[250px] md:h-[300px] w-full themebg flex items-center pl-6 md:pl-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold transition-all duration-300">
          About me
        </h1>
      </div>

      <div className="bg-black min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-8 md:px-20 py-12">
        <img
          src="/me1.jpg"
          alt="Jayesh Khuman"
          className="w-full max-w-sm h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />

        <div className="text-white max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed tracking-wide text-gray-300">
            Hey there, I'm{" "}
            <span className="font-semibold text-white">Jayesh Khuman</span>, a
            full-stack developer who finds joy in turning ideas into
            interactive, real-world web apps. I don't just write code - I
            architect systems, connect data, solve puzzles, and obsess over the
            small details that make great software feel effortless.
            <br />
            <br />
            My journey into tech began with curiosity - a deep urge to figure
            out <span className="italic">how</span> things work and{" "}
            <span className="italic">why</span> they matter. Over time, I've
            mastered tools like{" "}
            <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">Node.js</span>,{" "}
            <span className="text-white font-medium">Express</span>, and{" "}
            <span className="text-white font-medium">PostgreSQL</span>, building
            apps that blend functionality with real purpose.
            <br />
            <br />
            I believe great code is like great conversation - clear, meaningful,
            and made to connect. Whether I'm crafting an admin dashboard,
            fine-tuning a backend, or building a chatbot, I bring persistence,
            focus, and a dash of creativity to every line I write.
            <br />
            <br />
            Let's build something impactful, something people remember.
          </p>
        </div>
      </div>
    </>
  );
}
