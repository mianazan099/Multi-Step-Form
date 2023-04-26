import Head from "next/head";
import { Ubuntu } from "next/font/google";
import Sidebar from "./components/Sidebar";
import useMultiStepForm from "./useMultiStepForm";
import YourInfo from "/components/YourInfo";
import SelectPlan from "/components/SelectPlan";
import AddOns from "/components/AddOns";
import Summary from "/components/Summary";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const { steps, step, goto, stepNum } = useMultiStepForm([
    <YourInfo />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
  ]);
  return (
    <>
      <article className={`${ubuntu.className}`}>
        <Sidebar goto={goto} stepNum={stepNum} />
        <form>
          <div>{step}</div>
        </form>
      </article>
    </>
  );
}

// import ThankYou from "/components/ThankYou";
// import { useState } from "react";

//   const finished = false;
//   const [step, setStep] = useState(1);
