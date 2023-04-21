function Step({ num, name, active}) {
  return (
    <button className="lg:flex lg:items-center lg:gap-4">
      <span className={`inline-grid h-8 w-8 place-content-center rounded-full border ${ active ? "border-lightBlue bg-lightBlue" : "border-white text-white" }`}>
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


export default function Sidebar() {
  return (
    <aside className="absolute left-0 right-0 top-0 -z-10 flex h-[10.875rem] items-start justify-center gap-3.5 bg-mobSidebarBg bg-cover bg-center bg-no-repeat pt-8 lg:static lg:z-0 lg:h-full lg:w-[17.125rem] lg:flex-col lg:justify-normal lg:gap-8 lg:rounded-lg lg:bg-deskSidebarBg lg:px-8 lg:py-10">
      <Step num={1} name={"Your Info"} active={true} />
      <Step num={2} name={"Select Plan"} active={false} />
      <Step num={3} name={"Add-ons"} active={false} />
      <Step num={4} name={"Summary"} active={false}/>
    </aside>
  );
}
