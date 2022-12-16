import Sidebar from "./components/Sidebar";
import Info from "./components/Info";

const App = () => {
  return (
    <article className="mx-auto lg:grid lg:h-[36rem] lg:w-[min(56rem,100vw-2rem)] lg:grid-cols-[1fr,2.5fr] lg:rounded-xl lg:bg-white lg:p-1 lg:pr-0">
      <Sidebar />
      <main className="mx-auto w-[min(28rem,100%-2rem)] rounded-lg bg-white p-1.5 lg:px-0 lg:pt-2 lg:pb-0.5">
        <Info />
      </main>
    </article>
  );
};

export default App;
// h-[36]
// w-[58]
