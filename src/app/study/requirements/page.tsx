"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Stepper } from "@/components/Stepper/Stepper";
import { Requirements } from "@/components/Requirements/Requirements";

import { studySteps } from "@/constants";

export default function RequirementsPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const handleOnComplete = () => {
    router.push(studySteps[activeStep + 1].slug);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <PageContainer
        title=""
        breadcrumbs={[
          { title: "TetrisLab" },
          { title: "Study" },
          { title: "Requirements" },
        ]}
      >
        <Stepper steps={studySteps} activeStep={1} />
        <Requirements onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
