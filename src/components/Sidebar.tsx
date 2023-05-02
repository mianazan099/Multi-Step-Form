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
        className={`
          ${
            num === currentStep
              ? "border-lightBlue bg-lightBlue"
              : "border-white text-white"
          }
          inline-grid h-8 w-8 place-content-center rounded-full border
        `}
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

type SidebarProps = {
  currentStepNum: number;
  goto: Function;
};

const stepName = ["Your Info", "Select Plan", "Add-ons", "Summary"];

export default function Sidebar({ currentStepNum, goto }: SidebarProps) {
  return (
    <aside className="absolute left-0 right-0 top-0 flex h-[10.875rem] items-start justify-center gap-3.5 bg-mobSidebarBg bg-cover bg-center bg-no-repeat pt-8 lg:static lg:h-full lg:w-[17.125rem] lg:flex-col lg:justify-normal lg:gap-8 lg:rounded-lg lg:bg-deskSidebarBg lg:px-8 lg:py-10">
      {stepName.map((step, index) => (
        <Step
          key={index}
          num={index}
          name={step}
          currentStep={currentStepNum}
          goto={goto}
        />
      ))}
    </aside>
  );
}
