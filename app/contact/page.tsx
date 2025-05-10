export default function Contact() {
  return (
    <>
      <div className="h-[250px] md:h-[300px] w-full themebg flex items-center pl-6 md:pl-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold transition-all duration-300">
          Get in touch with me
        </h1>
      </div>

      <div className="min-h-screen w-full bg-black flex justify-center items-start px-4 sm:px-8 md:px-20 py-12">
        <div className="max-w-3xl w-full space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Feel free to reach out to connect, collaborate, or inquire about
            potential projects, partnerships, or speaking engagements. Share
            your ideas, requirements, or just say hello, I'd love to hear from
            you.
          </p>

          <div className="mt-6 space-y-3 text-white text-base sm:text-lg">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:jayeshkhuman121@gmail.com"
                className="text-blue-400 hover:underline"
              >
                jayeshkhuman121@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+919265646507"
                className="text-blue-400 hover:underline"
              >
                +91-9265646507
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
