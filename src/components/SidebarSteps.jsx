const sidebarStep = [
  { num: 1, name: "Your info", active: false },
  { num: 2, name: "Select Plan", active: false },
  { num: 3, name: "Add-ons", active: false },
  { num: 4, name: "Summary", active: false },
];

function SidebarStep({ num, name, active }) {
  return (
    <div className="">
      <span
        className={`grid h-2 w-2 place-content-center rounded-full border font-medium ${
          active
            ? "border-blue-light bg-blue-light text-blue-marine"
            : "border-white text-white"
        }`}
      >
        {num}
      </span>
      <div className="hidden lg:block">
        <p className="text-xs uppercase text-gray-light/60">Step {num}</p>
        <p className="text-sm font-bold uppercase text-white ">{name}</p>
      </div>
    </div>
  );
}

const SidebarSteps = ({ active }) => {
  const steps = sidebarStep.map((step) => {
    if (step.num === active + 1) {
      step.active = true;
      return step;
    } else {
      step.active = false;
      return step;
    }
  });
  console.log(steps);
  return (
    <div className="mx-auto flex w-fit gap-1 p-2">
      {steps.map((step) => {
        return (
          <SidebarStep
            key={step.num}
            num={step.num}
            name={step.name}
            active={step.active}
          />
        );
      })}
    </div>
  );
};

export default SidebarSteps;
