import Heading from "./Heading";
// import Image from "next/image";

// function Plan({ icon, name, price, selected }) {
//     return (
//         <div
//             className={`$ { selected ? "border-purplishBlue bg-opacity-5" : "border-lightGray" } flex items-center gap-3.5 rounded-md border bg-purplishBlue p-4 lg:flex-col lg:items-start lg:gap-10 lg:pt-5`}
//         >
//             <Image src={icon} width={40} height={40} alt="Plan Icon" />
//             <div>
//                 <p className="font-medium text-marineBlue">{name}</p>
//                 <p className="text-sm text-coolGray">{price}</p>
//             </div>
//         </div>
//     );
// }

export default function SelectPlan() {
    return (
        <>
            <Heading
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
            />
            {/* <div className="mb-6 grid gap-3 lg:mb-8 lg:grid-cols-3 lg:gap-[1.125rem]">
                mb-8   gap-[1.125rem]
                <Plan
                    icon="/images/icon-arcade.svg"
                    name="Arcade"
                    price="$9/mo"
                    selected={true}
                />
                <Plan
                    icon="/images/icon-advanced.svg"
                    name="Advanced"
                    price="$12/mo"
                    selected={false}
                />
                <Plan
                    icon="/images/icon-pro.svg"
                    name="Pro"
                    price="$15/mo"
                    selected={false}
                />
            </div> */}
            {/* <div className="flex justify-center gap-6 bg-purplishBlue bg-opacity-5 p-3.5">
                <p className="text-sm font-medium text-marineBlue lg:text-base">
                    Monthly
                </p>

                <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="h-5 w-[2.375rem] rounded-full bg-marineBlue after:absolute after:left-[5px] after:top-[4px] after:h-3 after:w-3 after:rounded-full after:bg-white  after:transition-all peer-checked:after:translate-x-4 peer-focus:ring-4 peer-focus:ring-pastelBlue lg:after:top-[6px]"></div>
                </label>

                <p className="text-sm font-medium text-coolGray lg:text-base">Yearly</p>
            </div> */}
        </>
    );
}
