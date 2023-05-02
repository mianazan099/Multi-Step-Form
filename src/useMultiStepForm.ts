import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepNum, setCurrentStepNum] = useState(0);

  function next() {
    setCurrentStepNum((prevNum) => {
      if (prevNum >= steps.length - 1) return prevNum;
      return prevNum + 1;
    });
  }

  function back() {
    setCurrentStepNum((prevNum) => {
      if (prevNum <= 0) return prevNum;
      return prevNum - 1;
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
    next,
    back,
    goto,
  };
}
