import Head from "next/head";
import { Ubuntu } from "next/font/google";
import Sidebar from "../components/Sidebar";
import useMultiStepForm from "../lib/useMultiStepForm";
import YourInfo from "/components/YourInfo";
import SelectPlan from "/components/SelectPlan";
import AddOns from "/components/AddOns";
import Summary from "/components/Summary";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const {steps, step, goto, stepNum} = useMultiStepForm([<YourInfo />, <SelectPlan />, <AddOns />, <Summary />]);
  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>
      <article className={`${ubuntu.className}`}>
        {/* h-screen w-screen p-4 lg:my-4 lg:flex lg:h-[37.5rem] lg:w-[min(58.75rem,100vw-2rem)] lg:justify-between lg:gap-4 lg:rounded-lg lg:bg-white`} */}
        <Sidebar goto={goto} stepNum={stepNum} />
        <form>
          <div>
            {step}
          </div>
          {/* <div className={`fixed bottom-0 left-0 right-0 z-10 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base`}> */}
            {/* <button className="text-coolGray disabled:text-white">Go Back</button> */}
            {/* <button className="rounded-md bg-marineBlue px-4 py-3 text-white disabled:bg-coolGray lg:px-6">Next Step</button> */}
          {/* </div> */}
        </form>
        {/* <div className={`lg:mx-auto lg:grid ${ finished ? "lg:place-content-center" : "lg:place-content-between"}`}> */}
        {/* <section className={`mx-auto mb-24 mt-20  w-[min(23.5rem,100%)] rounded-lg bg-white px-6 lg:mb-0 lg:w-[clamp(21.44rem,calc(18.95rem+10.61vw),28.50rem)] lg:rounded-none lg:p-0 ${   finished ? "py-20 lg:mt-0 " : "py-8 lg:mt-11" }`}> */}
        {/* {stepComp(1)} */}
        {/* </section> */}
        {/* </div> */}
      </article>
    </>
  );
}



// import ThankYou from "/components/ThankYou";
// import { useState } from "react";

//   const finished = false;
//   const [step, setStep] = useState(1);


