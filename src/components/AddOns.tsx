import Heading from "./Heading";
import data from "@/data.json";

type AddonProps = {
  id: number;
  name: string;
  info: string;
  price: number;
  addOns: number[];
  monthly: boolean;
  updateFields: (fields: { addOns: number[] }) => void;
};

function Addon({
  id,
  name,
  info,
  price,
  addOns,
  monthly,
  updateFields,
}: AddonProps) {
  const checked = addOns.includes(id);

  return (
    <label
      className={`
        flex items-center justify-between rounded-lg border p-4
        ${
          checked
            ? "border-purplishBlue bg-purplishBlue bg-opacity-5"
            : "border-lightGray"
        }
        focus-within:ring-2 focus-within:ring-purplishBlue
      `}
    >
      <div className="flex items-center gap-4 lg:gap-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            if (checked) {
              let newArr = addOns.filter((i) => i !== id);
              updateFields({ addOns: newArr });
            } else {
              updateFields({ addOns: [...addOns, id] });
            }
          }}
          className="h-5 w-5 rounded border-lightGray checked:bg-purplishBlue hover:checked:bg-purplishBlue focus:ring-0 focus:ring-offset-0 focus:checked:bg-purplishBlue"
        />
        <div>
          <p className="text-sm font-medium text-marineBlue lg:text-base">
            {name}
          </p>
          <p className="text-xs text-coolGray lg:text-sm">{info}</p>
        </div>
      </div>
      <p className="text-xs text-purplishBlue lg:text-sm">
        ${price}/{monthly ? "mo" : "yr"}
      </p>
    </label>
  );
}

type AddOnsData = {
  monthly: boolean;
  addOns: number[];
};

type AddOnsDataProps = AddOnsData & {
  updateFields: (fields: Partial<AddOnsData>) => void;
};

export default function AddOns({
  monthly,
  addOns,
  updateFields,
}: AddOnsDataProps) {
  return (
    <>
      <Heading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="space-y-3 lg:space-y-4">
        {data.addOns.map((addon) => (
          <Addon
            key={addon.id}
            id={addon.id}
            name={addon.name}
            info={addon.info}
            price={monthly ? addon.price.monthly : addon.price.yearly}
            addOns={addOns}
            monthly={monthly}
            updateFields={updateFields}
          />
        ))}
      </div>
    </>
  );
}
