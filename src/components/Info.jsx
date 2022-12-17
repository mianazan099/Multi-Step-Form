import Input from "./Input";

const Info = ({ state, dispatch }) => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="grid gap-0.75"
    >
      <Input name="Name" type="text" placeholder="e.g. Stephen King" />
      <Input
        name="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input name="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" />
      {/* <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-white p-1">
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
      </div> */}
    </form>
  </>
);

export default Info;
