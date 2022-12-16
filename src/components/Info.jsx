import PageInfo from "./PageInfo";
import Input from "./Input";

const Info = () => (
  <>
    <PageInfo />
    <form className="grid gap-0.75 lg:gap-1">
      <Input name="Name" type="text" placeholder="e.g. Stephen King" />
      <Input
        name="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input name="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" />
      <div className="lg:ml-auto lg:mt-[4rem]">
        <button className="rounded-md bg-blue-marine px-1 py-0.5 font-medium text-white">
          Next Step
        </button>
      </div>
    </form>
  </>
);

export default Info;
