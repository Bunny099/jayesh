"use client";
import { Typewriter } from "react-simple-typewriter";
export default function TypeWriter() {
  return (
    <h1 className="text-3xl md:text-5xl text-white font-mono font-bold pb-4 transition-all duration-300">
      <span className="ml-2 text-white">
        <Typewriter
          words={[
            "I'm Jayesh Khuman.",
            "I'm a Full-Stack Developer.",
            "I build fast & elegant web apps.",
            "Turning ideas into code.",
            "I'm Jayesh Khuman.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
}
