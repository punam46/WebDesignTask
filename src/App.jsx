import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Pages/Home";
import Facilities from './Pages/Facilities';
import Gallery  from './Pages/Gallery';
import Disclosure from './Pages/Disclosure';
import Contact from './Pages/Contact';



const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/disclosure" element={<Disclosure/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App




















































// import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header"
// import Home from "./Pages/Home";

// import Facilities from "./Pages/Facilities";
// import Gallery from "./Pages/Gallery";
// import Disclosure from "./Pages/Disclosure";
// import Contact from "./Pages/Contact";

// const App = () => {
//   return (
//     <>
//       <Header />

//       {/* Pages will appear UNDER header */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/facilities" element={<Facilities />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/disclosure" element={<Disclosure />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
