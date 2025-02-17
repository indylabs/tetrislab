"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Finish } from "@/components/Finish/Finish";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function FinishPage() {
  const { step } = useTetrisLabContext();

  const handleOnComplete = () => {
    // Using window.location.replace here to force reset of state
    window.location.replace("/");
  };

  return (
    <PageContainer
      title=""
      slots={{
        header: () => (
          <StudyHeader
            breadcrumbs={[{ title: "Pilot Study", path: "/info-sheet" }]}
          />
        ),
      }}
    >
      <Stepper activeStep={step} />
      <Finish onComplete={handleOnComplete} />
    </PageContainer>
  );
}
