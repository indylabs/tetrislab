"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Stepper } from "@/components/Stepper/Stepper";
import { InformationSheet } from "@/components/InformationSheet/InformationSheet";

import { studySteps } from "@/constants";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function InformationSheetPage() {
  const { step, setStep } = useTetrisLabContext();

  return (
    <>
      <PageContainer
        title=""
        breadcrumbs={[
          { title: "TetrisLab", path: "/" },
          { title: "Study", path: "/study" },
          { title: "Information Sheet", path: "/study/info-sheet" },
        ]}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <InformationSheet onComplete={() => setStep(step + 1)} />
      </PageContainer>
    </>
  );
}
