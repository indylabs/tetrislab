"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Debrief } from "@/components/Debrief/Debrief";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function DebriefPage() {
  const { step, setStep } = useTetrisLabContext();

  return (
    <>
      <PageContainer
        title=""
        slots={{
          header: () => (
            <StudyHeader
              breadcrumbs={[
                { title: "TetrisLab", path: "/" },
                { title: "Study", path: "/study" },
              ]}
            />
          ),
        }}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <Debrief onComplete={() => setStep(step + 1)} />
      </PageContainer>
    </>
  );
}
