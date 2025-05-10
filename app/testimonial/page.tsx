import TestimonialCard from "../components/testimonialcard";

export default function Testimonial() {
  return (
    <>
      <div className="h-[250px] md:h-[300px] w-full themebg flex items-center pl-6 md:pl-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold transition-all duration-300">
          Testimonials
        </h1>
      </div>

      <div className="min-h-screen w-full bg-black py-12 px-4 sm:px-8 md:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            image="testimonial2.jpg"
            name="Ghanshyan Patel"
            position="Founder @Keshav Digital"
            feedback="Working with Jayesh was a truly impressive experience. He developed a clean, modern website for our textile company that reflects our brand perfectly. From the design to the backend functionality, everything was tailored exactly to our needs. His dedication, technical skill, and attention to detail were evident at every step. The admin panel he built makes it incredibly easy for us to manage inquiries and products without any technical hassle. I highly recommend him to anyone looking for a reliable full-stack developer. Wishing him continued success in his career!"
          />
        </div>
      </div>
    </>
  );
}
