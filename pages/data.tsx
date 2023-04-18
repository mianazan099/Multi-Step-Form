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
        className="h-12 w-[min(450px,100%)] rounded-md border-lightGray focus:border-purplishBlue "
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

{
  /* <section className=""></section> */
}
{
  /* 
        <section className="px-20 pb-4 pt-11 ">
          <div>
            <Heading
              head={"Personal info"}
              desc={
                "Please provide your name, email address, and phone number."
              }
            />
            <form className="flex flex-col gap-6">
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
        </section> */
}

{
  /* Comment: Step 2 start */
}
{
  /* Select your plan */
}
{
  /* You have the option of monthly or yearly billing. */
}
{
  /* Arcade */
}
{
  /* $9/mo */
}
{
  /* Advanced */
}
{
  /* $12/mo */
}
{
  /* Pro */
}
{
  /* $15/mo */
}
{
  /* Monthly */
}
{
  /* Yearly */
}
{
  /* Go Back */
}
{
  /* Next Step */
}
{
  /* Comment: Step 2 end */
}
{
  /* Comment: Step 3 start */
}
{
  /* Pick add-ons */
}
{
  /* Add-ons help enhance your gaming experience. */
}
{
  /* Online service */
}
{
  /* Access to multiplayer games */
}
{
  /* +$1/mo */
}
{
  /* Larger storage */
}
{
  /* Extra 1TB of cloud save */
}
{
  /* +$2/mo */
}
{
  /* Customizable Profile */
}
{
  /* Custom theme on your profile */
}
{
  /* +$2/mo */
}
{
  /* Go Back */
}
{
  /* Next Step */
}
{
  /* Comment: Step 3 end */
}
{
  /* Comment: Step 4 start */
}
{
  /* Finishing up */
}
{
  /* Double-check everything looks OK before confirming. */
}
{
  /* Comment: Dynamically add subscription and add-on selections here */
}
{
  /* Total (per month/year) */
}
{
  /* Go Back */
}
{
  /* Confirm */
}
{
  /* Comment: Step 4 end */
}
{
  /* Comment: Step 5 start */
}
{
  /* Thank you! */
}
{
  /* Thanks for confirming your subscription! We hope you have fun  */
}
{
  /* using our platform. If you ever need support, please feel free  */
}
{
  /* to email us at support@loremgaming.com. */
}
{
  /* Comment: Step 5 end */
}
