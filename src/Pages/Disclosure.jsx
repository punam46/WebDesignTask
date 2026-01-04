
import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer';
const Disclosure = () => {
  const docs = [
    "Copies Of Affiliation/ Upgradation Letter And Recent Extension Of Affiliation",
    "Copies Of Societies/ Trust/ Company Registration/ Renewal Certificate",
    "Copy Of No Objection Certificate (NOC)",
    "Copies Of Recognition Certificate",
    "Copy Of Building Safety Certificate",
    "Copy Of Fire Safety Certificate",
    "Copy Of The DEO Certificate",
    "Copy Of valid Water, Health & Sanitation Certificate",
    "Mandatory Public Disclosure : Form",
  ];
   const items = [
    "Fee Structure",
    "Annual Academic Calendar – Junior",
    "Annual Academic Calendar – Senior",
    "Exam Calendar",
    "List Of Management Committee",
    "List Of Parents Teacher's Association",
    "Board Exams Result",
  ];
  const staffData = [
    ["Principal", "1"],
    ["Total No. Of Teachers", "28"],
    ["> PGT", "11"],
    ["> TGT", "5"],
    ["> PRT", "12"],
    ["> PTI", "1"],
    ["Teachers Section Ratio", "1:1.5"],
    ["Details Of Special Educator", "1"],
    ["Details of Counsellor and Wellness Teacher", "1"],
  ];
   const infraData = [
    ["Total Campus Area of the School (in sq mtr)", "12473"],
    ["No. & Size of Classrooms (in sq mtr)", "22 (1087)"],
    [
      "No. & Size of Laboratories including Computer Labs (in sq mtr)",
      "5 (276)",
    ],
    ["Internet Facility (Y/N)", "Y"],
    ["No. of Girls Toilet", "12"],
    ["No. of Boys Toilets", "15"],
    ["No. of Staff Toilets", "8"],
  ];
  return (
    <div>
      <Header2/>
      <div>
        <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2
        className="text-4xl font-bold text-pink-600 mb-2"
        style={{ fontFamily: "cursive" }}
      >
        General Information
      </h2>

      {/* Underline */}
      <div className="w-full h-[2px] bg-pink-800 mb-8"></div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white shadow">
              <th className="border-r px-6 py-4 text-lg font-bold text-left w-24">
                S.No.
              </th>
              <th className="border-r px-6 py-4 text-lg font-bold text-center">
                Information
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["1", "Name of the School", "Sanskriti Public School"],
              ["2", "Affiliation No.", "531551"],
              ["3", "School Code", "41525"],
              [
                "4",
                "Address",
                "Village Khandra, P.O. Shera, Panipat, Haryana (132113)",
              ],
              [
                "5",
                "Principal Name & Qualification",
                "Ms. Jyoti Gehlawat (M.A, M.Ed)",
              ],
              ["6", "School email id", "spskhandra@gmail.com"],
              [
                "7",
                "Contact Details",
                "9050435037, 8396035037",
              ],
            ].map(([no, info, details]) => (
              <tr
                key={no}
                className="border-b last:border-b-0"
              >
                <td className="px-6 py-4 text-lg border-r">{no}</td>
                <td className="px-6 py-4 text-lg border-r">{info}</td>
                <td className="px-6 py-4 text-lg">{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-pink-600 mb-2"
        style={{ fontFamily: "cursive" }}
      >
        Documents
      </h2>

      
      <div className="w-full h-[2px] bg-pink-800 mb-8"></div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="shadow bg-white">
              <th className="px-6 py-4 text-lg font-bold text-left border-r w-24">
                S.No.
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center">
                Documents
              </th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc, index) => (
              <tr
                key={index}
                className="border-b border-dotted last:border-b-0"
              >
                <td className="px-6 py-4 text-lg border-r">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-lg">
                  <a
                    href="#"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    {doc}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-pink-600 mb-2"
        style={{ fontFamily: "cursive" }}
      >
        Result & Academics
      </h2>

      {/* Green underline */}
      <div className="w-full h-[2px] bg-pink-600 mb-8"></div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white shadow">
              <th className="px-6 py-4 text-lg font-bold text-left border-r w-24">
                S.No.
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center">
                Documents
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-dotted last:border-b-0"
              >
                <td className="px-6 py-4 text-lg border-r">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-lg">
                  <a
                    href="#"
                    className="text-blue-700 underline hover:text-blue-900"
                  >
                    {item}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-pink-600 mb-2"
        style={{ fontFamily: "cursive" }}
      >
        Staff (Teaching)
      </h2>

      {/* Underline */}
      <div className="w-full h-[2px] bg-pink-600 mb-8"></div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white shadow">
              <th className="px-6 py-4 text-lg font-bold text-left border-r w-24">
                S.No.
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center border-r">
                Information
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {staffData.map(([info, details], index) => (
              <tr
                key={index}
                className="border-b border-dotted last:border-b-0"
              >
                <td className="px-6 py-4 text-lg border-r">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-lg border-r">
                  {info}
                </td>
                <td className="px-6 py-4 text-lg text-left">
                  {details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-pink-600 mb-2"
        style={{ fontFamily: "cursive" }}
      >
        School Infrastructure
      </h2>

      {/* Underline */}
      <div className="w-full h-[2px] bg-pink-600 mb-8"></div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white shadow">
              <th className="px-6 py-4 text-lg font-bold text-left border-r w-24">
                S.No.
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center border-r">
                Information
              </th>
              <th className="px-6 py-4 text-lg font-bold text-center">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {infraData.map(([info, details], index) => (
              <tr
                key={index}
                className="border-b border-dotted last:border-b-0"
              >
                <td className="px-6 py-4 text-lg border-r">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-lg border-r">
                  {info}
                </td>
                <td className="px-6 py-4 text-lg text-left">
                  {details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Disclosure
