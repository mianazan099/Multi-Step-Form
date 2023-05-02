import Heading from "./Heading";
import data from "@/data.json";

type SummaryDataProps = {
  monthly: boolean;
  plan: number;
  addOns: number[];
};

export default function Summary({
  monthly,
  plan: planNum,
  addOns,
}: SummaryDataProps) {
  const plan = data.plans[planNum];
  const planPrice = monthly ? plan.price.monthly : plan.price.yearly;
  const timeS = monthly ? "mo" : "yr";
  const timeL = monthly ? "month" : "year";

  const addonsPriceSum = data.addOns.reduce((previous, current) => {
    const price = monthly ? current.price.monthly : current.price.yearly;
    if (addOns.includes(current.id)) return previous + price;
    else return previous;
  }, 0);

  return (
    <>
      <Heading
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="rounded-md bg-purplishBlue bg-opacity-5 p-4 pt-5 text-sm lg:p-6">
        <div
          className={`
            flex items-center justify-between
            ${
              !(addOns.length === 0) &&
              "border-b-[1px] border-lightGray pb-3 lg:pb-6"
            }
          `}
        >
          <p className="pb-1 text-base font-medium text-marineBlue">
            {plan.name} ({timeL}ly)
          </p>
          <p className="text-base font-bold text-marineBlue">
            ${planPrice}/{timeS}
          </p>
        </div>
        <div
          className={`
            mt-4 space-y-3 lg:mt-5 lg:space-y-4
            ${addOns.length === 0 && "hidden"}
          `}
        >
          {addOns.sort().map((num) => {
            const addonData = data.addOns[num];
            const addonPrice = monthly
              ? addonData.price.monthly
              : addonData.price.yearly;
            return (
              <div
                key={addonData.id}
                className="flex items-center justify-between"
              >
                <p className="text-coolGray">{addonData.name}</p>
                <p className="text-marineBlue">
                  +${addonPrice}/{timeS}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-4 lg:px-6">
        <p className="text-sm text-coolGray">Total (per {timeL})</p>
        <p className="text-xl font-bold text-purplishBlue">
          +${planPrice + addonsPriceSum}/{timeS}
        </p>
      </div>
    </>
  );
}
