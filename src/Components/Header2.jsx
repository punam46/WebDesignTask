import { useEffect, useState } from "react";
import hdr from "../assets/hdr.jpg"; 
import logo from "../assets/logo.png";    

export default function Hero() {
  const text = "SANSKRITI PUBLIC SCHOOL";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 120); 
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${hdr})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center px-4">
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-28 mb-5" />

        {/* Typing Text */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-widest">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mt-2">
          Khandra, Panipat
        </p>
      </div>
    </div>
  );
}
