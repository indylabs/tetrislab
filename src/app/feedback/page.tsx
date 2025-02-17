"use client";

import { PageContainer } from "@toolpad/core/PageContainer";
import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import Feedback from "@/components/Feedback/Feedback";

export default function FeedbackPage() {
  return (
    <PageContainer
      title=""
      slots={{
        header: () => (
          <>
            <StudyHeader
              breadcrumbs={[{ title: "Feedback", path: "/feedback" }]}
            />
            <Feedback />
          </>
        ),
      }}
    ></PageContainer>
  );
}
