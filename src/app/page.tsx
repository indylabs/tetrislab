"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { Home } from "@/components/Home/Home";

export default function HomePage() {
  return (
    <PageContainer
      title=""
      breadcrumbs={[]}
      sx={{
        height: "100%",
      }}
    >
      <Home />
    </PageContainer>
  );
}
