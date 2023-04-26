import Heading from "./Heading";

// function Addon({
//   name,
//   info,
//   price,
// }) {
//   const checked = false;
//   return (
//     <label
//       className={`flex items-center justify-between rounded-lg border  p-4 ${
//         checked
//           ? "border-purplishBlue bg-purplishBlue bg-opacity-5"
//           : "border-lightGray"
//       }`}
//     >
//       <div className="flex items-center gap-4 lg:gap-6">
//         <input
//           type="checkbox"
//           className="h-5 w-5 rounded border-lightGray checked:bg-purplishBlue focus:ring-0 focus:ring-offset-0 focus:checked:bg-purplishBlue"
//         />
//         <div>
//           <p className="text-sm font-medium text-marineBlue lg:text-base">
//             {name}
//           </p>
//           <p className="text-xs text-coolGray lg:text-sm">{info}</p>
//         </div>
//       </div>
//       <p className="text-xs text-purplishBlue lg:text-sm">{price}</p>
//     </label>
//   );
// }

export default function AddOns() {
  return (
    <>
      <Heading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      {/* <div className="space-y-3 lg:space-y-4">
        <Addon
          name="Online service"
          info="Access to multiplayer games"
          price="+$1/mo"
        />
        <Addon
          name="Larger storage"
          info="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <Addon
          name="Customizable Profile"
          info="Custom theme on your profile"
          price="+$2/mo"
        />
      </div> */}
    </>
  );
}
