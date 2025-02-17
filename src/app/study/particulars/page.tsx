"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Particulars } from "@/components/Particulars/Particulars";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function ParticularsPage() {
  const { step, nextStep } = useTetrisLabContext();

  const handleOnComplete = () => {
    // TODO: Persist participant data here
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
        <Particulars onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
