import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "block hover:underline underline-offset-4 transition duration-200 text-bold";

  return (
    <header className="bg-white text-pink-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={logo}
            alt="Sanskriti Public School Logo"
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
          />
          <h1 className="text-sm sm:text-base md:text-xl font-bold whitespace-nowrap">
            Sanskriti Public School  
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm lg:text-base">
          <Link to="/" className={linkStyle}>HOME</Link>
        
          <Link to="/facilities" className={linkStyle} >FACILITIES</Link>
          <Link to="/gallery" className={linkStyle}>GALLERY</Link>
          <Link to="/disclosure" className={linkStyle}>MANDATORY PUBLIC DISCLOSURE</Link>
          <Link to="/contact" className={linkStyle}>CONTACT</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

     
      {open && (
        <div className="md:hidden bg-white px-4 py-3 flex flex-col gap-3 text-sm ">
          <Link to="/" className={linkStyle } onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className={linkStyle} onClick={() => setOpen(false)}>About</Link>
          <Link to="/facilities" className={linkStyle} onClick={() => setOpen(false)}>Facilities</Link>
          <Link to="/gallery" className={linkStyle} onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/disclosure" className={linkStyle} onClick={() => setOpen(false)}>Disclosure</Link>
          <Link to="/contact" className={linkStyle} onClick={() => setOpen(false)}>Contact</Link>
        </div>
        
      )}
      
    </header>
    
  );
  
}

