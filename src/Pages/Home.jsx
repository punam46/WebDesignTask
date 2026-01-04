

















































































































































































































































































































































































































































































































































































































import React from 'react'
import { useState ,useEffect } from 'react';
import chairman from "../assets/chairman.jpg"
import principal from "../assets/principal.jpg";

import Header from "../Components/Header"
import Footer from "../Components/Footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { GiJusticeStar } from 'react-icons/gi';

const Home = () => {
  const [step, setStep] = useState(0);
   const images = [img1, img2, img3, img4];
     const [index, setIndex] = useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
       if (step < 9) {
         const timer = setTimeout(() => {
           setStep(step + 1);
         }, 600); 
         return () => clearTimeout(timer);
       }
     }, [step]);
   
     const boxStyle = `
     borderCollapse: "separate",
       boxSizing: "border-box",
       textIndent: "initial",
       unicodeBidi: "isolate",
       bg-white shadow-lg p-6
       rounded-2xl
       text-pink-800 text-lg font-medium
       transform transition-all duration-700 ease-out
     `;
  return (
    // <Header/>
   <div>
    <div className="w-full">

      {/* ================= SLIDER ================= */}
      <div className="w-full h-[80vh] overflow-hidden relative">
        <img
          src={images[index]}
          alt="School Activity"
          className="w-full h-full object-cover transition-all duration-700"
        />

        
       
      </div>

      {/* ================= ABOUT CONTENT ================= */}
      <div className="bg-[#FFF6E5] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">
         “Learning gives creativity, Creativity leads to thinking, Thinking provides knowledge, Knowledge makes you great.”
        </h2>

        <p className="max-w-4xl mx-auto text-black text-lg leading-relaxed">
          
The Sanskriti Public School is devoted towards character building and all-round personality development covering area of -
 Confidence Building
 Fluency
 Leadership
 Physical Development
Our primary goal is to make a conscious effort to link group of students to one another across the world and thus initiate understanding of global issues. We provide novel sports facilities and plethora of co-curricular activities to ensure a synchronized growth of a child’s body, mind and soul besides keeping them very much attached to the elementary roots of Indian culture and ethos while developing in them the global outlook on life.
        </p>
      </div>

    </div>
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-pink-600">
          Why Choose Us
        </h2>
        <div className="w-full h-[2px] bg-pink-600 mt-3"></div>
      </div>

      {/* Quote Card */}
      <div className="relative max-w-3xl mx-auto bg-pink-100 rounded-3xl shadow-lg px-8 pt-16 pb-10">

       

        {/* Quote Icon */}
        <div className="absolute bottom-6 right-6 text-6xl text-green-300 opacity-60">
          ”
        </div>

        {/* Highlight Title */}
        <h3 className="text-xl font-bold text-purple-700 text-center mb-4">
          “A Foundation for Lifelong Learning”
        </h3>

        
        <p className="text-gray-800 text-lg leading-relaxed text-center">
          The school comes with an uncompromising commitment to excellence. It
          aims to achieve specific and quantifiable results among all students
          by nurturing young minds in a dynamic learning environment. Through
          active learning and value-based education, we empower children to grow
          with confidence, curiosity, and competence.
        </p>

        
      </div>

    </section>
    </div>
    <div>
      <section className="max-w-7xl mx-auto px-4 py-14">

      {/* Section Title */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-pink-700">
          Our Views
        </h2>
        <div className="w-full h-[2px] bg-purple-300 mt-3"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">

  {/* Chairperson Card */}
  <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl shadow-lg px-8 pt-16 pb-8">

    {/* Profile Image */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
      <img
        src={chairman}
        alt="Chairman"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <span className="absolute top-6 left-6 text-6xl text-purple-400 opacity-30">“</span>

    <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
      Chairman’s Message
    </h3>

    <p className="italic text-lg text-gray-700 mb-4 text-center">
      “Somewhere, something incredible is waiting to be known.”
    </p>

    <p className="text-sm font-semibold text-purple-600 mb-6 text-center">
      — Carl Sagan
    </p>

    <p className="text-gray-800 leading-relaxed whitespace-pre-line">
      I came across this amazing quote quite suddenly when I was looking for some
      information on the internet and realized how relevant it is for all of us:
      children, parents and teachers.

      {"\n\n"}Education is not restricted to lessons taught in textbooks. It is a
      lifelong exercise that becomes exciting when curiosity is encouraged.
      Parents and teachers must motivate children to ask questions, because
      learning begins with curiosity.

      {"\n\n"}Schools must ensure enriching experiences that help children become
      truly educated.

      {"\n\n"}— Mr. Karamveer Chopra  
      PRINCIPAL
    </p>
  </div>

  {/* Principal Card */}
  <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl shadow-lg px-8 pt-16 pb-8">

    {/* Profile Image */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
      <img
        src={principal}
        alt="Principal"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <span className="absolute top-6 left-6 text-6xl text-emerald-400 opacity-30">“</span>

    <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
      Principal’s Message
    </h3>

    <p className="italic text-lg text-gray-700 mb-4 text-center">
      “Children must be taught how to think, not what to think.”
    </p>

    <p className="text-sm font-semibold text-emerald-600 mb-6 text-center">
      — Margaret Mead
    </p>

    <p className="text-gray-800 leading-relaxed whitespace-pre-line">
      We believe in the perfection that exists in each individual and that it can
      be manifested through right guidance. Every child has a spark of genius
      that teachers help kindle.

      {"\n\n"}SANSKRITI PUBLIC SCHOOL aims to develop communication skills,
      independent thinking, ethical values, and social responsibility.

      {"\n\n"}We seek cooperation from parents and the community to build a
      brighter future together.

      {"\n\n"}— Jyoti Gehlawat
    </p>
  </div>

</div>

    </section>
    </div>
    <div>
      <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-pink-600 mb-10">
              Latest Circulars
            </h2>
      
            <div className="space-y-6 ">
      
              {/* 1 */}
              <div
                className={`${boxStyle} flex items-center gap-3  ${
                  step >= 1
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                 <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
        <h1 className="text-lg font-semibold">
          ADMISSION OPEN FOR THE YEAR OF 2025-26   
        </h1>
              </div>
      </div>
          </section>
    </div>
    <div>
       <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mt-4" style={{ fontFamily: 'Pacifico, cursive' }}>
      Memorable Movements
    </h2>
     <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-screen">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-2 h-44 transform rotate-[var(--rotate)] hover:scale-105 transition-transform"
          style={{
            "--rotate": `${Math.random() * 10 - 5}deg`, // random tilt
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
    </div>
    
    <Footer/>
   </div>
  )
}

export default Home