import Heading from "./Heading";
import Input from "./Input"

export default function YourInfo() {
  return (
    <>
      <Heading
        head={"Personal info"}
        desc={"Please provide your name, email address, and phone number."}
      />
      <form className="flex flex-col gap-6">
        <Input name={"Name"} type={"text"} placeholder={"e.g. Stephen King"} />
        <Input name={"Email Address"} type={"email"} placeholder={"e.g. stephenking@lorem.com"} />
        <Input name={"Phone Number"} type={"tel"} placeholder={"e.g. +1 234 567 890"} />
      </form>
    </>
  );
}
