"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Stepper } from "@/components/Stepper/Stepper";
import { Requirements } from "@/components/Requirements/Requirements";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function RequirementsPage() {
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
          { title: "Requirements", path: "/study/requirements" },
        ]}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <Requirements onComplete={() => setStep(step + 1)} />
      </PageContainer>
    </>
  );
}
