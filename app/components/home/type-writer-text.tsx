'use client'
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterText() {
  return (
    <div className="font-secondary text-typewriter font-semibold text-3xl sm:text-4xl xl:text-5xl">
      <Typewriter
        words={['Full Stack Developer', 'React Native Developer', 'JavaScript Developer', 'Node.js Developer']}
        loop={true}
        cursor
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
