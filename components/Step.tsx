export default function Step({
    num,
    name,
    active,
  }: {
    num: number;
    name: string;
    active: boolean;
  }) {
    return (
      <button className="lg:flex lg:items-center lg:gap-4">
        <span
          className={`inline-grid h-8 w-8 place-content-center rounded-full border ${
            active ? "border-lightBlue bg-lightBlue" : "border-white text-white"
          }`}
        >
          {num}
        </span>
        <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:uppercase">
          <p className="text-start text-xs leading-none text-coolGray">
            Step {num}
          </p>
          <p className="text-sm font-medium leading-none text-white">{name}</p>
        </div>
      </button>
    );
  }