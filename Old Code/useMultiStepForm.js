import { useState } from "react";

export default function useMultiStepForm(steps) {
  const [currentStepNum, setCurrentStepNum] = useState(0);
  function next() {
    setCurrentStepNum(i => {
        if (i >= steps.lenght) return i
        return i + 1;
    })
  }     
  function back() {
    setCurrentStepNum(i=>{
        if (i <= 0) return i
        return i - 1;
    })
  }
  function goto(stepNum) {
    setCurrentStepNum(stepNum);
  }
  return {
    steps,
    step: steps[currentStepNum],
    stepNum: currentStepNum,
    next,
    back,
    goto
  };
}
