import Head from "next/head";
import useMultiStepForm from "@/useMultiStepForm";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const { step, currentStepNum, goto } = useMultiStepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
    <div>Four</div>,
  ]);
  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>
      <article>
        <Sidebar currentStepNum={currentStepNum} goto={goto} />
        {step}
      </article>
    </>
  );
}
