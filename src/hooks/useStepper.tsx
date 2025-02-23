import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { STUDY_STEPS } from "@/constants";

const useStepper = () => {
  const [step, setStep] = useState(1);
  const pathname = usePathname();
  const router = useRouter();

  const nextStep = () => {
    const next = STUDY_STEPS[step];

    if (next) {
      router.push(next.slug);
    }
  };

  useEffect(() => {
    const currentStep = STUDY_STEPS.find((step) => step.slug === pathname);

    if (currentStep) {
      setStep(currentStep.id);
    }
  }, [pathname]);

  return [step, nextStep] as const;
};

export default useStepper;
