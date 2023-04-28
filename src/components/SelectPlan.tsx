import Heading from "./Heading";
import Image from "next/image";
import data from "@/data.json";

type PlanProps = {
  id: number;
  icon: string;
  name: string;
  price: number;
  monthly: boolean;
  selected: number;
  updateFields: (fields: { plan: number }) => void;
};

function Plan({
  id,
  icon,
  name,
  price,
  monthly,
  selected,
  updateFields,
}: PlanProps) {
  return (
    <button
      type="button"
      onClick={() => {
        updateFields({ plan: id });
      }}
      className={`${
        selected === id
          ? "border-purplishBlue bg-purplishBlue bg-opacity-5"
          : "border-lightGray"
      } flex items-center text-left gap-3.5 rounded-md border p-4  lg:flex-col lg:items-start lg:gap-10 lg:pt-5`}
    >
      <Image src={icon} width={40} height={40} alt="Plan Icon" />
      <div>
        <p className="font-medium text-marineBlue lg:mb-1">{name}</p>
        <p className="text-sm text-coolGray lg:mb-1.5">{`$${price}/${
          monthly ? "mo" : "yr"
        }`}</p>
        {!monthly && <p className="text-xs text-marineBlue">2 months free</p>}
      </div>
    </button>
  );
}

type PlanData = {
  monthly: boolean;
  plan: number;
};

type PlanDataProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void;
};

export default function SelectPlan({
  monthly,
  plan,
  updateFields,
}: PlanDataProps) {
  return (
    <>
      <Heading
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="grid gap-3 mb-6 lg:mb-8 lg:grid-cols-3 lg:gap-[1.125rem]">
        {/* mb-8 gap-[1.125rem] */}
        {data.plans.map((planData) => {
          return (
            <Plan
              key={planData.id}
              id={planData.id}
              icon={planData.icon}
              name={planData.name}
              price={monthly ? planData.price.monthly : planData.price.yearly}
              monthly={monthly}
              selected={plan}
              updateFields={updateFields}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-6 bg-purplishBlue bg-opacity-5 p-3.5 rounded-lg">
        <p
          className={`text-sm font-medium ${
            monthly ? "text-marineBlue" : "text-coolGray"
          } lg:text-base`}
        >
          Monthly
        </p>
        <button
          type="button"
          onClick={() => {
            updateFields({ monthly: !monthly });
          }}
          className={`h-5 relative w-[2.375rem] rounded-full bg-marineBlue after:absolute after:h-3 after:w-3 after:rounded-full after:bg-white after:left-[5px] after:top-[4px] after:transition-all focus:ring-4 focus:ring-pastelBlue
        ${monthly ? "" : "after:translate-x-4"}
        `}
        ></button>
        <p
          className={`text-sm font-medium ${
            !monthly ? "text-marineBlue" : "text-coolGray"
          } lg:text-base`}
        >
          Yearly
        </p>
      </div>
    </>
  );
}
