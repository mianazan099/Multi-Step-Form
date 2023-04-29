import Heading from "./Heading";
import data from "@/data.json"

type SummaryData = {
  monthly: boolean;
  plan: number;
  addOns: number[]
};

type SummaryDataProps = SummaryData & {
  updateFields: (fields: Partial<SummaryData>) => void;
};

export default function Summary({ monthly, plan, addOns, updateFields }: SummaryDataProps) {
  const selectedPlan = data.plans[plan]
  const selectedPlanPrice = monthly ? data.plans[plan].price.monthly : data.plans[plan].price.yearly
  const addonsPriceSum = data.addOns.reduce((preVal, curVal) => {
    let value = monthly ? curVal.price.monthly : curVal.price.yearly
    if (addOns.includes(curVal.id)) return preVal + value
    else return preVal
  }, 0)
  return (
    <>
      <Heading
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="rounded-md bg-purplishBlue bg-opacity-5 p-4 pt-5 text-sm lg:p-6">
        <div className="flex items-center justify-between border-b-[1px] border-lightGray pb-3 lg:pb-6">
          <p className="font-medium text-marineBlue text-base pb-1">{selectedPlan.name} {monthly ? '(Monthly)' : '(Yearly)'}</p>
          <p className="font-bold text-marineBlue text-base">${selectedPlanPrice}/{monthly ? 'mo' : 'yr'}</p>
        </div>
        <div className="space-y-3 mt-4 lg:space-y-4 lg:mt-5">
          {addOns.sort().map(num => {
            let addonData = data.addOns[num]
            return (
              <div key={addonData.id} className='flex items-center justify-between'>
                <p className="text-coolGray">{addonData.name}</p>
                <p className="text-marineBlue">+${monthly ? addonData.price.monthly : addonData.price.yearly}/{monthly ? 'mo' : 'yr'}</p>
              </div>)
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-4 lg:px-6">
        <p className="text-coolGray text-sm">Total (per {monthly ? 'month' : 'year'})</p>
        <p className="text-purplishBlue font-bold text-xl">+${selectedPlanPrice + addonsPriceSum}/{monthly ? 'mo' : 'yr'}</p>
      </div>
    </>
  );
}
