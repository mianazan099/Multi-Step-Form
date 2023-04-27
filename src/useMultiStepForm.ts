import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepNum, setCurrentStepNum] = useState(0);

  function next() {
    setCurrentStepNum((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepNum((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(num: number) {
    setCurrentStepNum(num);
  }

  return {
    steps,
    currentStepNum,
    step: steps[currentStepNum],
    isFirstStep: currentStepNum === 0,
    isLastStep: currentStepNum === steps.length - 1,
    goto,
    back,
    next,
  };
}
