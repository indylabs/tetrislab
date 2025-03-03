import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { StepperContextType } from "@/types";
import { STUDY_STEPS } from "@/constants";

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const StepperContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [step, setStep] = useState(1);

  const nextStep = () => {
    const next = STUDY_STEPS[step];

    if (next) {
      router.push(next.slug);
    }

    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const currentStep = STUDY_STEPS.find((step) => step.slug === pathname);

    if (currentStep) {
      // if currentStep is > 1 ahead of 'step'
      if (currentStep.id - step > 1) {
        const inititialStep = STUDY_STEPS[0]; // get initial step

        // if (inititialStep) {
        //   setStep(1); // set step to initial
        //   router.push(inititialStep.slug); // route to initial step slug
        // }
      } else {
        setStep(currentStep.id);
      }
    }
  }, [pathname]);

  return (
    <StepperContext.Provider value={{ step, nextStep }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error(
      "useStepperContext must be used within a StepperContext.Provider"
    );
  }
  return context;
};
