"use client";

import { Container } from "@/components/Container/Container";
import { Home } from "@/components/Home/Home";

export default function HomePage() {
  return (
    <Container showStepper={false}>
      <Home />
    </Container>
  );
}
