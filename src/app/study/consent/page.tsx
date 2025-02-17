"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Consent } from "@/components/Consent/Consent";

import { STUDY_STEPS } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function ConsentPage() {
  const { step, nextStep } = useTetrisLabContext();

  return (
    <>
      <PageContainer
        title=""
        slots={{
          header: () => (
            <StudyHeader
              breadcrumbs={[{ title: "Pilot Study", path: "/study" }]}
            />
          ),
        }}
      >
        <Stepper steps={STUDY_STEPS} activeStep={step} />
        <Consent onComplete={nextStep} />
      </PageContainer>
    </>
  );
}
