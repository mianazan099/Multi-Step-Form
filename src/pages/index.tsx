import Head from "next/head";
import { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";
import useMultiStepForm from "@/useMultiStepForm";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

type FormData = {
  name: string;
  email: string;
  number: string;
  monthly: boolean;
  plan: number;
  addOns: number[]
};

const INIT_DATA: FormData = {
  name: "",
  email: "",
  number: "",
  monthly: true,
  plan: 0,
  addOns: [0]
};

export default function Home() {
  const [data, setData] = useState(INIT_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { step, currentStepNum, goto, back, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      <PersonalInfo {...data} updateFields={updateFields} />,
      <SelectPlan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary />,
    ]);

  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>

      <article
        className={`${ubuntu.className} p-4 lg:flex lg:w-[min(58.75rem,100vw-2rem)] lg:my-4 lg:rounded-lg lg:bg-white lg:h-[37.5rem] lg:gap-4`}
      // ${finished ? "lg:place-content-center" : "lg:place-content-between"}
      >
        <Sidebar currentStepNum={currentStepNum} goto={goto} />
        <form
          className="rounded-lg bg-white mb-24 mt-20 max-w-[23.5rem] mx-auto z-10 relative px-6 py-8 lg:mb-0 lg:mt-11 lg:max-w-none lg:w-[clamp(21.44rem,calc(18.95rem+10.61vw),28.50rem)] lg:rounded-none lg:p-0 lg:flex lg:flex-col lg:justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isLastStep) next();
            else console.log("done");
          }}
        // ${finished ? " py-20 lg:mt-0 " : ""}
        >
          <div>{step}</div>
          <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base">
            <button
              className="text-coolGray disabled:hidden hover:text-marineBlue"
              type="button"
              onClick={back}
              disabled={isFirstStep}
            >
              Go Back
            </button>
            <button
              className={`rounded-md bg-marineBlue px-4 py-3 text-white ml-auto lg:px-6 hover:bg-opacity-80 ${isLastStep && "bg-purplishBlue"
                }`}
            >
              {!isLastStep ? "Next Step" : "Confirm"}
            </button>
          </div>
        </form>
      </article>
    </>
  );
}
