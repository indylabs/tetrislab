"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Debrief } from "@/components/Debrief/Debrief";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function DebriefPage() {
  const { step, nextStep } = useTetrisLabContext();

  const handleOnComplete = () => {
    // TODO: Persist debrief data here
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
        <Debrief onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
