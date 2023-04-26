import Head from "next/head";
import { Ubuntu } from "next/font/google";
import useMultiStepForm from "@/useMultiStepForm";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const { step, currentStepNum, goto } = useMultiStepForm([
    <PersonalInfo />,
    <SelectPlan />,
    <AddOns />,
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
        // ${finished ? " py-20 lg:mt-0 " : ""}
        >
          <div>
            {step}
          </div>
          <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base" >
            <button className="text-coolGray">
              {/* disabled:text-white */}
              Go Back
            </button>
            <button className="rounded-md bg-marineBlue px-4 py-3 text-white">
              {/* disabled:bg-coolGray lg:px-6 */}
              Next Step
            </button>
          </div>
        </form>
      </article>
    </>
  );
}
