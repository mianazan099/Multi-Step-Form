import Head from "next/head";
import Step from "../components/Step";
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
        <aside className="absolute left-0 right-0 top-0 -z-10 flex h-[10.875rem] items-start justify-center gap-[0.875rem] bg-mobSidebarBg bg-cover bg-center bg-no-repeat pt-8 lg:static lg:z-0 lg:h-full lg:w-[17.125rem] lg:flex-col lg:justify-normal lg:gap-8 lg:rounded-lg lg:bg-deskSidebarBg lg:px-8 lg:py-10">
          <Step num={1} name={"Your Info"} active={true} />
          <Step num={2} name={"Select Plan"} active={false} />
          <Step num={3} name={"Add-ons"} active={false} />
          <Step num={4} name={"Summary"} active={false} />
        </aside>
        <div className="lg:mx-auto lg:grid lg:place-content-between">
          <section className="mx-auto mt-20 h-[375px] w-[clamp(21.44rem,calc(19.08rem+10.05vw),28.13rem)] bg-marineBlue lg:mt-11"></section>
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-white p-4 text-sm lg:static lg:bg-opacity-0 ">
            <button className="ml-auto block rounded-md bg-marineBlue px-4 py-3 font-medium text-white lg:px-6 lg:text-base">
              Next Step
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
