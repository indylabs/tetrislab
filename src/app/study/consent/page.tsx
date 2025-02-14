"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Stepper } from "@/components/Stepper/Stepper";
import { Consent } from "@/components/Consent/Consent";

import { studySteps } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function ConsentPage() {
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
          { title: "Consent", path: "/study/consent" },
        ]}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <Consent onComplete={() => setStep(step + 1)} />
      </PageContainer>
    </>
  );
}
