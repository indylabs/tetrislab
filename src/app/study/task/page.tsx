"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Task } from "@/components/Task/Task";

import { studySteps } from "@/constants";

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
              breadcrumbs={[
                { title: "TetrisLab", path: "/" },
                { title: "Study", path: "/study" },
              ]}
            />
          ),
        }}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <Task onComplete={nextStep} />
      </PageContainer>
    </>
  );
}
