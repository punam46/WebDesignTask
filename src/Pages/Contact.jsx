import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
const Contact = () => {
  return (
    <div>
      <Header2/>
      <div>
        <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Address */}
        <div className="bg-[#d8d8cc] rounded-3xl p-6 shadow">
          <div className="flex items-center gap-2 mb-3">
            <FaMapMarkerAlt className="h-6 w-6 text-black" />
            <h3 className="font-bold text-lg">Address</h3>
          </div>
          <p className="text-base leading-relaxed">
            Sanskriti Public School, Village Khandra, P.O. Shera, Distt. Panipat,
            Haryana (Pin Code : 132113)
          </p>
        </div>

        {/* Email */}
        <div className="bg-[#d8d8cc] rounded-3xl p-6 shadow">
          <div className="flex items-center gap-2 mb-3">
            <MdMarkEmailRead className="h-6 w-6 text-black" />
            <h3 className="font-bold text-lg">Email ID</h3>
          </div>
          <p className="text-base break-all">
            spskhandra@gmail.com
          </p>
        </div>

        {/* Contact */}
        <div className="bg-[#d8d8cc] rounded-3xl p-6 shadow">
          <div className="flex items-center gap-2 mb-3">
            <IoMdContact className="h-6 w-6 text-black" />
            <h3 className="font-bold text-lg">Contact No.</h3>
          </div>
          <p className="text-base leading-relaxed">
            +91-9050435037 <br />
            +91-9728011723 <br />
            +91-8396035037
          </p>
        </div>

        {/* Website */}
        <div className="bg-[#d8d8cc] rounded-3xl p-6 shadow">
          <div className="flex items-center gap-2 mb-3">
            <CgWebsite className="h-6 w-6 text-black" />
            <h3 className="font-bold text-lg">Website</h3>
          </div>
          <a
            href="http://www.spskhandra.com/"
            target="_blank"
            rel="noreferrer"
            className="text-base underline"
          >
            www.spskhandra.com
          </a>
        </div>

      </div>
    </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-pink-600 mb-3">
        Reach Us
      </h2>
      <div className="h-[2px] w-full bg-pink-600 mb-6"></div>

      {/* Map Container */}
      <div className="w-full h-[450px] rounded-md overflow-hidden border">
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Sanskriti%20Public%20School%20Khandra%20Panipat&output=embed
"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
    <div>
       <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-pink-600 mb-3">
        Write To Us
      </h2>
      <div className="h-[2px] w-full bg-pink-600 mb-10"></div>

      {/* Form Card */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            We’d love to hear from you
          </h3>
          <p className="text-gray-600">
            Have a question about admissions, facilities, or anything else?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="bg-green-50 p-6 rounded-xl">
            <p className="font-medium text-gray-700">📍 Address</p>
            <p className="text-gray-600">
              Khandra, Panipat, Haryana
            </p>

            <p className="font-medium text-gray-700 mt-4">📞 Phone</p>
            <p className="text-gray-600">
              +91 9XXXXXXXXX
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
