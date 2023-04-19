import Head from "next/head";
import Step from "@/components/Step";
// import YourInfo from "@/components/YourInfo";
// import SelectPlan from "@/components/SelectPlan";
import AddOns from "@/components/AddOns";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>
      <main
        className={`${ubuntu.className} h-screen w-screen p-4 lg:my-4 lg:flex lg:h-[37.5rem] lg:w-[min(58.75rem,100vw-2rem)] lg:justify-between lg:gap-4 lg:rounded-lg lg:bg-white`}
      >
        <aside className="absolute left-0 right-0 top-0 -z-10 flex h-[10.875rem] items-start justify-center gap-3.5 bg-mobSidebarBg bg-cover bg-center bg-no-repeat pt-8 lg:static lg:z-0 lg:h-full lg:w-[17.125rem] lg:flex-col lg:justify-normal lg:gap-8 lg:rounded-lg lg:bg-deskSidebarBg lg:px-8 lg:py-10">
          <Step num={1} name={"Your Info"} active={true} />
          <Step num={2} name={"Select Plan"} active={false} />
          <Step num={3} name={"Add-ons"} active={false} />
          <Step num={4} name={"Summary"} active={false} />
        </aside>
        <div className="lg:mx-auto lg:grid lg:place-content-between">
          <section className="mx-auto mb-24 mt-20 w-[min(23.5rem,100%)] rounded-lg bg-white px-6 py-8 lg:mb-0 lg:mt-11 lg:w-[clamp(21.44rem,calc(18.95rem+10.61vw),28.50rem)] lg:rounded-none lg:p-0">
            {/* <YourInfo /> */}
            {/* <SelectPlan /> */}
            <AddOns />
          </section>
          <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-between bg-white p-4 text-sm font-medium lg:static lg:bg-opacity-0 lg:px-0 lg:text-base">
            <button className="text-coolGray">Go Back</button>
            <button className="rounded-md bg-marineBlue px-4 py-3 text-white lg:px-6">
              Next Step
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
