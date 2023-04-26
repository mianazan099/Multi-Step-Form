import Heading from "./Heading";

export default function PersonalInfo() {
  return (
    <>
      <Heading
        title={"Personal info"}
        description={"Please provide your name, email address, and phone number."}
      />
      {/* <div className="flex flex-col gap-6"> */}
      {/* <Input name={"Name"} type={"text"} placeholder={"e.g. Stephen King"} /> */}
      {/* <Input name={"Email Address"} type={"email"} placeholder={"e.g. stephenking@lorem.com"} /> */}
      {/* <Input name={"Phone Number"} type={"tel"} placeholder={"e.g. +1 234 567 890"} /> */}
      {/* </div> */}
    </>
  );
}
