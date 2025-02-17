"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Debrief } from "@/components/Debrief/Debrief";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function DebriefPage() {
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
      <Debrief onComplete={nextStep} />
    </PageContainer>
  );
}
