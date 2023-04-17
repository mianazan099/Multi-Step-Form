import Head from "next/head";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Step({ num, name }: { num: number; name: string }) {
  return (
    <button className="flex items-center gap-4">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lightBlue">
        {num}
      </span>
      <div className="flex flex-col gap-2 uppercase">
        <p className="text-start text-xs leading-none text-coolGray">
          Step {num}
        </p>
        <p className="text-sm font-medium leading-none text-white">{name}</p>
      </div>
    </button>
  );
}

function Input({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="text-sm">
      <div className="mb-1 flex justify-between">
        <p className="text-marineBlue">{name}</p>
        <p className="font-medium text-strawberryRed">This field is required</p>
      </div>
      <input
        className="h-12 w-[450px] rounded-md border-lightGray focus:border-purplishBlue "
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

function Heading({ head, desc }: { head: string; desc: string }) {
  return (
    <div className="pb-11">
      <h1 className="mb-4 text-3xl font-bold text-marineBlue">{head}</h1>
      <p className="text-coolGray">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi-step form</title>
      </Head>
      <main
        className={`${ubuntu.className} flex h-[600px] w-[min(58.75rem,100vw-2rem)] gap-4 rounded-lg bg-white p-4`}
      >
        <aside className="flex w-[274px] flex-col gap-8 rounded-lg bg-deskSidebarBg bg-cover bg-center bg-no-repeat px-8 py-10 ">
          {/* Sidebar start */}
          <Step num={1} name={"Your Info"} />
          <Step num={2} name={"Select Plan"} />
          <Step num={3} name={"Add-ons"} />
          <Step num={4} name={"Summary"} />
          {/* Sidebar end */}
        </aside>
        <section className="px-20 pb-4 pt-11 ">
          {/* Step 1 start */}
          <div>
            <Heading
              head={"Personal info"}
              desc={
                "Please provide your name, email address, and phone number."
              }
            />
            <form className="flex flex-col gap-6">
              {/* onSubmit={(e) => e.preventDefault()} */}
              <Input
                name={"Name"}
                type={"text"}
                placeholder={"e.g. Stephen King"}
              />
              <Input
                name={"Email Address"}
                type={"email"}
                placeholder={"e.g. stephenking@lorem.com"}
              />
              <Input
                name={"Phone Number"}
                type={"tel"}
                placeholder={"e.g. +1 234 567 890"}
              />
            </form>
          </div>
          <button className="ml-auto block rounded-lg bg-marineBlue px-6 py-4 font-medium text-white">
            Next Step
          </button>
          {/* Comment: Step 1 end */}
        </section>
      </main>
      {/* Comment: Step 2 start */}
      {/* Select your plan */}
      {/* You have the option of monthly or yearly billing. */}
      {/* Arcade */}
      {/* $9/mo */}
      {/* Advanced */}
      {/* $12/mo */}
      {/* Pro */}
      {/* $15/mo */}
      {/* Monthly */}
      {/* Yearly */}
      {/* Go Back */}
      {/* Next Step */}
      {/* Comment: Step 2 end */}
      {/* Comment: Step 3 start */}
      {/* Pick add-ons */}
      {/* Add-ons help enhance your gaming experience. */}
      {/* Online service */}
      {/* Access to multiplayer games */}
      {/* +$1/mo */}
      {/* Larger storage */}
      {/* Extra 1TB of cloud save */}
      {/* +$2/mo */}
      {/* Customizable Profile */}
      {/* Custom theme on your profile */}
      {/* +$2/mo */}
      {/* Go Back */}
      {/* Next Step */}
      {/* Comment: Step 3 end */}
      {/* Comment: Step 4 start */}
      {/* Finishing up */}
      {/* Double-check everything looks OK before confirming. */}
      {/* Comment: Dynamically add subscription and add-on selections here */}
      {/* Total (per month/year) */}
      {/* Go Back */}
      {/* Confirm */}
      {/* Comment: Step 4 end */}
      {/* Comment: Step 5 start */}
      {/* Thank you! */}
      {/* Thanks for confirming your subscription! We hope you have fun  */}
      {/* using our platform. If you ever need support, please feel free  */}
      {/* to email us at support@loremgaming.com. */}
      {/* Comment: Step 5 end */}
    </>
  );
}
