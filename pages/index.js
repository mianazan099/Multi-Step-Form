export default function Home() {
  return <>
    <h1>Home</h1>
  </>
}
// import Head from "next/head";
// import { Ubuntu } from "next/font/google";
// import YourInfo from "/components/YourInfo";
// import SelectPlan from "/components/SelectPlan";
// import AddOns from "/components/AddOns";
// import Summary from "/components/Summary";
// import ThankYou from "/components/ThankYou";
// import { useState } from "react";
// import Sidebar from "../components/Sidebar";

// const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

// function stepComp(num) {
//   switch (num) {
//     case 1:
//       return <YourInfo />;
//     case 2:
//       return <SelectPlan />;
//     case 3:
//       return <AddOns />;
//     case 4:
//       return <Summary />;
//     case 0:
//       return <ThankYou />;
//   }
// }

//   const finished = false;
//   const [step, setStep] = useState(1);
//   return (
//     <>
//       <Head>
//         <title>Multi-step form</title>
//       </Head>
//       <main
//         className={`${ubuntu.className} h-screen w-screen p-4 lg:my-4 lg:flex lg:h-[37.5rem] lg:w-[min(58.75rem,100vw-2rem)] lg:justify-between lg:gap-4 lg:rounded-lg lg:bg-white`}
//       >
//         <Sidebar/>
//         <div
//           className={`lg:mx-auto lg:grid ${
//             finished ? "lg:place-content-center" : "lg:place-content-between"
//           }`}
//         >
//           <section
//             className={`mb-24 mt-20 mx-auto  w-[min(23.5rem,100%)] rounded-lg bg-white px-6 lg:mb-0 lg:w-[clamp(21.44rem,calc(18.95rem+10.61vw),28.50rem)] lg:rounded-none lg:p-0 ${
//               finished ? "py-20 lg:mt-0 " : "py-8 lg:mt-11"
//             }`}
//           >
//             {stepComp(1)}
//           </section>
//           <div
//             className={`fixed bottom-0 left-0 right-0 z-10 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base ${
//               finished ? "hidden" : "flex"
//             }`}
//           >
//             <button className="text-coolGray disabled:text-white">
//               Go Back
//             </button>
//             <button className="rounded-md bg-marineBlue px-4 py-3 text-white disabled:bg-coolGray lg:px-6">
//               Next Step
//               {/* Confirm */}
//             </button>
//           </div>
//         </div>
//       </main>
//     </>
//   );
