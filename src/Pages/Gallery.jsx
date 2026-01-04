import React from 'react'
import Header2 from '../Components/Header2'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import e1 from "../assets/e1.jpg"
import e2 from "../assets/e2.jpg"
import e3 from "../assets/e3.jpg"
import e4 from "../assets/e4.jpg"
import Footer from '../Components/Footer';

const Gallery = () => {
  const images = [img1, img2, img3, img4];
  const images2=[e1,e2,e3,e4]
  return (
    <div>
      <Header2/>
      <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mt-4" style={{ fontFamily: 'Pacifico, cursive' }}>
      Activities
    </h2>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-screen">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-2 h-44 transform rotate-[var(--rotate)] hover:scale-105 transition-transform"
          style={{
            "--rotate": `${Math.random() * 10 - 5}deg`, 
          }}
        >
          <img
            src={img}
            alt={`polaroid-${index}`}
            className="w-64 h-40 object-cover rounded-md"
          />
         
        </div>
      ))}
    </div>
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mt-4" style={{ fontFamily: 'Pacifico, cursive' }}>
      Events
    </h2>
     <div className="relative max-w-4xl mx-auto mt-12">
  {/* Vertical line in the middle */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-600"></div>

  {images2.map((img, index) => (
    <div
      key={index}
      className="mb-12 flex w-full relative"
    >
      <div
        className={`w-full md:w-1/2 p-4 ${
          index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
        }`}
      >
        <div className="bg-white border-7 border-white dark:border-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
          <img
            src={img}
            alt={`activity-${index}`}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Dot on the line */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-pink-500 rounded-full border-2 border-white"></div>
    </div>
  ))}
</div>

    </div>
    <Footer/>
    </div>
    
  )
}

export default Gallery
