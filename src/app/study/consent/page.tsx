"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Consent } from "@/components/Consent/Consent";

import { studySteps } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function ConsentPage() {
  const { step, nextStep } = useTetrisLabContext();

  const handleOnComplete = () => {
    // TODO: Persist consent data here
    nextStep();
  };

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
        <Stepper steps={studySteps} activeStep={step} />
        <Consent onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
