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

const sidebarStep = [
  { num: 1, name: "Your info", active: true },
  { num: 2, name: "Select Plan", active: false },
  { num: 3, name: "Add-ons", active: false },
  { num: 4, name: "Summary", active: false },
];

const App = () => {
  return (
    <div className="h-screen bg-magnolia font-ubuntu lg:grid lg:place-content-center">
      <article className="mx-auto lg:grid lg:w-[min(56rem,100vw-2rem)] lg:grid-cols-[1fr,2.5fr] lg:rounded-xl lg:bg-white lg:p-1 lg:pr-0">
        <aside className="h-[172px] bg-sidebarMobile bg-cover bg-no-repeat lg:h-auto lg:rounded-lg lg:bg-sidebarDesktop">
          <div className="mx-auto flex w-fit gap-1 p-2 lg:mx-0 lg:flex-col lg:gap-2">
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
        <main className="absolute top-6 left-1/2 mx-auto w-[min(28rem,100%-2rem)] -translate-x-1/2 rounded-lg bg-white p-1.5 lg:static lg:translate-x-0 lg:px-0 lg:pt-2 lg:pb-0.5">
          <div className="mb-1.5">
            <h1 className="mb-0.25 text-lg font-bold text-blue-marine">
              Personal info
            </h1>
            <p className="text-gray-cool">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <form className="grid gap-0.75 lg:gap-1">
            <div>
              <label
                className="mb-0.25 text-sm text-blue-marine"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded border-gray-light placeholder:text-gray-cool"
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
              />
            </div>
            <div>
              <label
                className="mb-0.25 text-sm text-blue-marine"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full rounded border-gray-light placeholder:text-gray-cool"
                type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
              />
            </div>
            <div>
              <label className="mb-0.25 text-sm text-blue-marine" htmlFor="tel">
                Phone Number
              </label>
              <input
                className="w-full rounded border-gray-light placeholder:text-gray-cool"
                type="tel"
                id="tel"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
            <div className="lg:ml-auto lg:mt-[4rem]">
              <button className="rounded-md bg-blue-marine px-1 py-0.5 font-medium text-white">
                Next Step
              </button>
            </div>
          </form>
        </main>
        {/* <Card>
          <Sidebar>
            <SidebarStep></SidebarStep>
          </Sidebar>
          <Main></Main>
        </Card> */}
      </article>
    </div>
  );
};

export default App;
