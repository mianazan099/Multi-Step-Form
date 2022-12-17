import PageInfo from "./PageInfo";
import Info from "./Info";
import Plan from "./Plan";
import Addon from "./Addon";
import Finish from "./Finish";

const Main = ({ state, dispatch }) => {
  return (
    <main className="mx-auto my-[6rem] w-[calc(100%-2rem)] rounded-lg bg-white p-1.5 shadow-md">
      <PageInfo dataNum={state.step} />
      {state.step === 0 && <Info state={state} dispatch={dispatch} />}
      {state.step === 1 && <Plan />}
      {state.step === 2 && <Addon />}
      {state.step === 3 && <Finish />}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-white p-1">
        <button
          className={`text-gray-cool ${state.step > 0 ? "block" : "hidden"}`}
          onClick={() => dispatch({ type: "previous_step" })}
        >
          Go Back
        </button>
        <button
          onClick={() => dispatch({ type: "next_step" })}
          className={`rounded-md bg-blue-marine px-1 py-0.5 font-medium text-white ${
            state.step < 1 ? "ml-auto block" : ""
          }`}
        >
          Next Step
        </button>
      </div>
    </main>
  );
};

export default Main;
