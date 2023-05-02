import Head from "next/head";
import { Ubuntu } from "next/font/google";
import { FormEvent, useState } from "react";

import useMultiStepForm from "@/useMultiStepForm";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";
import ThankYou from "@/components/ThankYou";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

type FormData = {
  name: string;
  email: string;
  number: string;
  monthly: boolean;
  plan: number;
  addOns: number[];
};

const INIT_DATA: FormData = {
  name: "yweyertyfdhskadagwertsldkdgwuetwerlsgfliwetrtwe",
  email: "yweyertyfdhskadagwertsldkdgwuetwerlsgfliwetrtwe",
  number: "yweyertyfdhskadagwertsldkdgwuetwerlsgfliwetrtwe",
  monthly: true,
  plan: 0,
  addOns: [],
};

export default function Home() {
  const [data, setData] = useState(INIT_DATA);
  const [finished, setFinished] = useState(false);

  const { step, currentStepNum, goto, back, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      <PersonalInfo key={0} {...data} updateFields={updateFields} />,
      <SelectPlan key={1} {...data} updateFields={updateFields} />,
      <AddOns key={2} {...data} updateFields={updateFields} />,
      <Summary key={3} {...data} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) next();
    else if (data.name === "" || data.email === "" || data.number === "")
      goto(0);
    else setFinished(true);
  }

  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>

      <article
        className={`
          ${ubuntu.className}
          p-4 lg:my-4 lg:flex lg:h-[37.5rem] lg:w-[min(58.75rem,100vw-2rem)] lg:gap-4 lg:rounded-lg lg:bg-white
          ${finished && "lg:items-center"}
        `}
      >
        <Sidebar currentStepNum={currentStepNum} goto={goto} />
        <form
          className={`
            relative z-10 mx-auto mb-24 mt-20 max-w-[23.5rem] rounded-lg bg-white px-6  lg:mb-0 lg:flex lg:w-[clamp(21.44rem,calc(18.95rem+10.61vw),28.50rem)] lg:max-w-none lg:flex-col lg:justify-between lg:rounded-none lg:p-0
            ${finished ? "py-20 lg:mt-0" : "py-8 lg:mt-11"}
          `}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>{!finished ? step : <ThankYou />}</div>
          <div
            className={`
              fixed bottom-0 left-0 right-0 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base
              ${finished && "hidden"}
            `}
          >
            <button
              className="text-coolGray hover:text-marineBlue disabled:hidden"
              type="button"
              onClick={back}
              disabled={isFirstStep}
            >
              Go Back
            </button>
            <button
              className={`
                ml-auto rounded-md bg-marineBlue px-4 py-3 text-white hover:bg-opacity-80 lg:px-6
                ${isLastStep && "bg-purplishBlue"}
              `}
            >
              {!isLastStep ? "Next Step" : "Confirm"}
            </button>
          </div>
        </form>
      </article>
    </>
  );
}
