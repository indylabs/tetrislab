"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Stepper } from "@/components/Stepper/Stepper";
import { MMTR } from "@/components/MMTR/MMTR";

import { studySteps } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function MMTRPage() {
  const { step, setStep } = useTetrisLabContext();

  if (step === 0) {
    return null;
  }

  return (
    <>
      <PageContainer
        title=""
        breadcrumbs={[
          { title: "TetrisLab", path: "/" },
          { title: "Study", path: "/study" },
          {
            title: "Media Multitasking (Revised) Questionnaire",
            path: "/study/mmtr",
          },
        ]}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <MMTR onComplete={() => setStep(step + 1)} />
      </PageContainer>
    </>
  );
}
