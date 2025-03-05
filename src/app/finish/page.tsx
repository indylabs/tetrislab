"use client";

import React from "react";

import { Container } from "@/components/Container/Container";
import Finish from "@/components/Finish/Finish";

function FinishPage() {
  return (
    <Container>
      <Finish />
    </Container>
  );
}

export default React.memo(FinishPage);