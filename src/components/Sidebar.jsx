import SidebarStep from "./SidebarStep";

const sidebarStep = [
  { num: 1, name: "Your info", active: true },
  { num: 2, name: "Select Plan", active: false },
  { num: 3, name: "Add-ons", active: false },
  { num: 4, name: "Summary", active: false },
];

const Sidebar = () => {
  return (
    <aside className="h-[172px] bg-sidebarMobile bg-cover bg-no-repeat lg:h-auto lg:rounded-lg lg:bg-sidebarDesktop">
      <div className="mx-auto flex w-fit gap-1 p-2 lg:mx-0 lg:flex-col lg:gap-1.5">
        {sidebarStep.map((step) => {
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
    </aside>
  );
};

export default Sidebar;
