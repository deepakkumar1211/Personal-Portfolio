import React from "react";

const Resume = () => {
  const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";

  return (
    <div id="resume" className="flex flex-col items-center justify-center p-6 space-y-4 bg-secondaryLinear">
      <h1 className="text-2xl font-bold">My Resume</h1>
      {/* Embed PDF in an iframe */}
      <iframe
        src={pdfPath}
        title="Deepak Kumar Sahu Resume"
        className="w-[100%] sm:w-[70%]  h-[450px] sm:h-[1000px] border rounded-2xl shadow-lg bg-transparent "
      ></iframe>
      {/* Open PDF in a new tab */}
      <div className="flex gap-4">
        <a
          href={pdfPath}
          target="_blank"
          type="application/pdf"
          rel="noopener noreferrer"
          className="text-blue-500 inline-block"
        >
          <button
          // className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
          >
            View Resume
          </button>
        </a>
        {/* Download Button */} 
        <button
          // className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline"
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
  );
};

export default Resume;




// import React from "react";

// const PdfViewer = () => {
//   const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfPath;
//     link.download = "Deepak_Kumar_Sahu_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 space-y-4">
//       <h1 className="text-2xl font-bold">My Resume</h1>
//       {/* Open PDF in a new tab */}
//       <a
//         href={pdfPath}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 underline"
//       >
//         View Resume
//       </a>
//       {/* Download Button */}
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleDownload}
//       >
//         Download Resume
//       </button>
//     </div>
//   );
// };

// export default PdfViewer;



// import React, { useRef } from "react";

// const PdfViewer = () => {
//   const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";
//   const pdfContainerRef = useRef(null);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfPath;
//     link.download = "Deepak_Kumar_Sahu_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 space-y-4">
//       <h1 className="text-2xl font-bold">My Resume</h1>
//       {/* Embed PDF using the <embed> element */}
//       <div
//         ref={pdfContainerRef}
//         className="w-full h-[600px] border rounded-lg shadow-lg overflow-hidden"
//       >
//         <embed
//           src={pdfPath}
//           type="application/pdf"
//           width="100%"
//           height="200%"
//         />
//       </div>
//       {/* Download Button */}
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleDownload}
//       >
//         Download Resume
//       </button>
//     </div>
//   );
// };

// export default PdfViewer;


// This code is says loading pdf solve it later do not delete it
// import React, { useRef, useEffect } from "react";
// import { pdfjs, Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PdfViewer = () => {
//   const pdfPath = "/assets/resume/Deepak_Kumar_Sahu_Resume.pdf";
//   // console.log(pdfPath);
  
//   const pdfContainerRef = useRef(null);

//   useEffect(() => {
//     // Focus on PDF container when loaded
//     if (pdfContainerRef.current) {
//       pdfContainerRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfPath;
//     link.download = "Deepak_Kumar_Sahu_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div id="resume" className="flex flex-col items-center justify-center p-6 space-y-4">
//       <h1 className="text-2xl font-bold">My Resume</h1>
//       {/* Render PDF with react-pdf */}
//       <div
//         ref={pdfContainerRef}
//         className="w-full h-[600px] border rounded-lg shadow-lg overflow-auto bg-gray-100"
//       >
//         <Document file={pdfPath} loading={<p>Loading PDF...</p>} className="p-4">
//           <Page pageNumber={1} width={800} renderTextLayer={true} renderAnnotationLayer={true} />
//         </Document>
//       </div>
//       <div className="flex gap-4">
//         <a
//             href={pdfPath}
//             target="_blank"
//             type="application/pdf"
//             rel="noopener noreferrer"
//             className="text-blue-500 inline-block"
//           >
//             <button
//             // className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
//             >
//               View Resume
//             </button>
//         </a>
//         {/* Download Button */}
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={handleDownload}
//         >
//           Download Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;
