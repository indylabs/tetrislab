"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { InformationSheet } from "@/components/InformationSheet/InformationSheet";

import { studySteps } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function InformationSheetPage() {
  const { step, nextStep } = useTetrisLabContext();

  return (
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
      <InformationSheet onComplete={nextStep} />
    </PageContainer>
  );
}
