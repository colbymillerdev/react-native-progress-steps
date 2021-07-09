import { createContext } from "react";

const ProgressContext = createContext({
  setActiveStep: () => {},
  activeStep: 0,
  stepCount: 0,
});

export default ProgressContext;
