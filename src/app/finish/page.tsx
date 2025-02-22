"use client";

import { Container } from "@/components/Container/Container";
import { Finish } from "@/components/Finish/Finish";

export default function FinishPage() {
  const handleOnComplete = () => {
    // Using window.location.replace here to force reset of state
    window.location.replace("/");
  };

  return (
    <Container>
      <Finish onComplete={handleOnComplete} />
    </Container>
  );
}
