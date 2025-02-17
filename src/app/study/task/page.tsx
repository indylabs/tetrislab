"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Task } from "@/components/Task/Task";

import { STUDY_STEPS } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function TaskPage() {
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
        <Task onComplete={nextStep} />
      </PageContainer>
    </>
  );
}
