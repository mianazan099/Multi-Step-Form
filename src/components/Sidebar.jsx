import SidebarSteps from "./SidebarSteps";

const Sidebar = ({ state }) => {
  console.log(state.step);
  return (
    <aside className="absolute top-0 left-0 right-0 -z-10 h-[10.75rem] bg-sidebarMobile bg-cover bg-center bg-no-repeat">
      <SidebarSteps active={state.step} />
    </aside>
  );
};

export default Sidebar;
