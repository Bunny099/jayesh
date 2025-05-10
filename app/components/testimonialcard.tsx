interface testimonialCardProps {
  name: string;
  feedback: string;
  position: string;
  image: string;
}
export default function TestimonialCard({
  name,
  feedback,
  position,
  image,
}: testimonialCardProps) {
  return (
    <div className="max-w-md w-full bg-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-md shadow-xl border border-white/20 transition-transform duration-300 hover:scale-[1.02]">
      <p className="text-base sm:text-lg text-gray-200 italic mb-6 leading-relaxed">{`“${feedback}”`}</p>
      <div className="flex items-center gap-4">
        <img
          src={`/${image}`}
          alt={`${name}'s avatar`}
          className="h-14 w-14 rounded-full object-cover border-2 border-white/30"
        />
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    </div>
  );
}
