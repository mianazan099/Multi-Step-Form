import Heading from "./Heading";

export default function Summary() {
  return (
    <>
      <Heading
        head="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div className="rounded-md bg-purplishBlue bg-opacity-5 p-4 pt-5 text-sm lg:p-6">
        <div className="flex items-center justify-between border-b-[1px] border-lightGray pb-3 lg:pb-6">
          <div>
            <p className="font-medium text-marineBlue text-base pb-1">Arcade (Monthly)</p>
            <span className="text-coolGray underline">Change</span>
          </div>
          <p className="font-bold text-marineBlue text-base">$9/mo</p>
        </div>
        <div className="space-y-3 mt-4 lg:space-y-4 lg:mt-5">
          <div className='flex items-center justify-between'>
            <p className="text-coolGray">Online service</p>
            <p className="text-marineBlue">+$1/mo</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className="text-coolGray">Larger storage</p>
            <p className="text-marineBlue">+$2/mo</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-4 lg:px-6">
        <p className="text-coolGray text-sm">Total (per month)</p>
        <p className="text-purplishBlue font-bold text-xl">+$12/mo</p>
      </div>
    </>
  );
}
