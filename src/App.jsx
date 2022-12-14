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
        <p className="text-xs uppercase text-gray-light">Step {num}</p>
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
    <div className="h-screen bg-magnolia font-ubuntu">
      <article className="mx-auto max-w-4xl lg:grid lg:grid-cols-[1fr,2.5fr]">
        <aside className="h-[172px] bg-sidebarMobile bg-cover bg-no-repeat lg:h-auto lg:rounded-lg lg:bg-sidebarDesktop">
          <div className="mx-auto flex w-fit gap-1 py-2 lg:flex-col lg:gap-2">
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
        <main>
          <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="e.g. Stephen King" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
              />
            </div>
            <div>
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" id="tel" placeholder="e.g. +1 234 567 890" />
            </div>
          </form>
          <button>Next Step</button>
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
