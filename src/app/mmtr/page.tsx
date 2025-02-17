"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { MMTR } from "@/components/MMTR/MMTR";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function MMTRPage() {
  const { step, nextStep } = useTetrisLabContext();

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
      <MMTR onComplete={nextStep} />
    </PageContainer>
  );
}
