import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepNum, setCurrentStepNum] = useState(0);
  function goto(num:number) {
    setCurrentStepNum(num)
  }
  return { steps, currentStepNum, step: steps[currentStepNum],goto };
}
