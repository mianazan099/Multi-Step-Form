function SidebarStep({ num, name, active }) {
  return (
    <div className="lg:flex lg:items-center lg:gap-1">
      <span
        className={`grid h-2 w-2 place-content-center rounded-full  font-bold text-white  ring-1 ring-white ${
          active && "bg-blue-light text-blue-marine ring-blue-light"
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

export default SidebarStep;
