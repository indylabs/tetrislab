"use client";

import { useRouter } from "next/navigation";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { Finish } from "@/components/Finish/Finish";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function FinishPage() {
  const router = useRouter();
  const { step } = useTetrisLabContext();

  const handleOnComplete = () => {
    router.push("/");
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
        <Finish onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
