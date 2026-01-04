import React from 'react'
import { useEffect, useState } from "react";
import Header2 from "../Components/Header2"
import Footer from '../Components/Footer';
import { GiJusticeStar } from "react-icons/gi";

const Facilities = () => {
  const [step, setStep] = useState(0);

  
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
  
    // text-pink-800 text-lg font-medium
    // transform transition-all duration-700 ease-out
  `;

  return (
    <div>
    <Header2/>
    <div>
      <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-pink-600 mb-10">
        Facilities Offered
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
    School in 5.25 Acres of land with lush green environment
  </h1>
        </div>

        {/* 2 */}
        <div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 2
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           Experienced, qualified & dedicated staff
          </h1>
        </div>

        {/* 3 */}
        <div
          className={`${boxStyle} flex items-center gap-3 ${
            step >= 3
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
          CCTV cameras in all classrooms for surveillance of the students
          </h1>
        </div>

        {/* 4 */}
        <div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           A school of learners
           </h1>
        </div>

        <div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           A great place to be and to learners
           </h1>
        </div>


<div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           Well equipped labs
           </h1>
        </div>


<div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           Strive for ecellence in Acedemic,Sports and skills
           </h1>
        </div>


<div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
           Provide the best infrastructure and technology in emerging fields of study and Knowledge
           </h1>
        </div>


<div
          className={`${boxStyle} flex items-center gap-3  ${
            step >= 4
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <GiJusticeStar className="text-pink-600 text-3xl flex-shrink-0" />
  <h1 className="text-lg font-semibold">
          Affordable Fee
          </h1>
        </div>


      </div>
    </section>
    </div>
    <Footer/>
    </div>

    
  )
}

export default Facilities
