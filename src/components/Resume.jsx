// import React from "react";

// const Resume = () => {
//   const imagePath = "/assets/resume/Deepak_Kumar_Sahu_Resume_1.png";
//   const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";

//   return (
//     <div id="resume" className="flex flex-col items-center justify-center p-6 space-y-4 bg-secondaryLinear">
//       <h1 className="text-2xl font-bold">My Resume</h1>
//       {/* Display Resume Image */}
//       <img
//         src={imagePath}
//         alt="Deepak Kumar Sahu Resume"
//         className=" sm:w-[60%] h-auto border rounded-2xl shadow-lg"
//       />
//       {/* Open PDF in a new tab and Download Button */}
//       <div className="flex gap-4">
//         <a
//           href={pdfPath}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500"
//         >
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             View Resume
//           </button>
//         </a>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => {
//             const link = document.createElement("a");
//             link.href = pdfPath;
//             link.download = "Deepak_Kumar_Sahu_Resume.pdf";
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//           }}
//         >
//           Download Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Resume;



import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  const imagePath = "/assets/resume/Deepak_Kumar_Sahu_Resume_1.png";
  const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";

  return (
    <section id="resume" className="sm:mb-0 sm:px-16 px-6 py-4 pt-14 bg-secondaryLinear sm:pb-10">
      <motion.h1
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1, type: 'spring', stiffness:"120"}}
      className="font-Poppins font-semibold text-[30px] sm:text-[45px] leading-[80px] text-white text-center ">
        My Resume
      </motion.h1>
        <motion.div 
          className={``}
          whileInView={{ x: [-250, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Display Resume Image */}
            <img
              src={imagePath}
              alt="Deepak Kumar Sahu Resume"
              className=" sm:w-[60%] h-auto border rounded-xl shadow-lg"
            />
            {/* Open PDF in a new tab and Download Button */}
            <div className="flex gap-4 my-3">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hidden sm:block"
              >
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Resume
                </button>
              </a>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = pdfPath;
                  link.download = "Deepak_Kumar_Sahu_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
    </section>
  )
};

export default Resume;