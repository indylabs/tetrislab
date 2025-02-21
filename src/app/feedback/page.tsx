"use client";

import { Container } from "@/components/Container/Container";
import Feedback from "@/components/Feedback/Feedback";

export default function FeedbackPage() {
  return (
    <Container title="Feedback" showStepper={false}>
      <Feedback />
    </Container>
  );
}
