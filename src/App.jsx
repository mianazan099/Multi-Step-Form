import { useEffect, useReducer } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function reducer(state, action) {
  switch (action.type) {
    case "next_step": {
      if (state.step < 3) {
        return {
          step: state.step + 1,
        };
      } else {
        return state;
      }
    }
    case "previous_step": {
      if (state.step > 0) {
        return {
          step: state.step - 1,
        };
      } else {
        return state;
      }
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { step: 0 });

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <article className="flow-root">
      <Sidebar state={state} />
      <Main state={state} dispatch={dispatch} />
    </article>
  );
};

export default App;
// h-[36]
// w-[58]
