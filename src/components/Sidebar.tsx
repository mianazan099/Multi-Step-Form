type SidebarProps = {
  currentStepNum: number;
  goto: Function;
};

export default function Sidebar({ currentStepNum, goto }: SidebarProps) {
  return (
    <aside className="bg-mobSidebarBg bg-cover bg-center bg-no-repeat absolute left-0 right-0 top-0 h-[10.875rem] flex items-start justify-center gap-3.5 pt-8 lg:static lg:h-full lg:w-[17.125rem] lg:flex-col lg:justify-normal lg:gap-8 lg:rounded-lg lg:bg-deskSidebarBg lg:px-8 lg:py-10">
      <Step
        num={0}
        name={"Your Info"}
        currentStep={currentStepNum}
        goto={goto}
      />
      <Step
        num={1}
        name={"Select Plan"}
        currentStep={currentStepNum}
        goto={goto}
      />
      <Step num={2} name={"Add-ons"} currentStep={currentStepNum} goto={goto} />
      <Step num={3} name={"Summary"} currentStep={currentStepNum} goto={goto} />
    </aside>
  );
}

type StepProps = {
  num: number;
  name: string;
  currentStep: number;
  goto: Function;
};

function Step({ num, name, currentStep, goto }: StepProps) {
  return (
    <button
      className="lg:flex lg:items-center lg:gap-4"
      onClick={() => {
        goto(num);
      }}
    >
      <span
        className={`${
          num === currentStep
            ? "border-lightBlue bg-lightBlue"
            : "border-white text-white"
        } inline-grid h-8 w-8 place-content-center rounded-full border`}
      >
        {num + 1}
      </span>
      <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:uppercase">
        <p className="text-start text-xs leading-none text-coolGray">
          Step {num + 1}
        </p>
        <p className="text-sm font-medium leading-none text-white">{name}</p>
      </div>
    </button>
  );
}
