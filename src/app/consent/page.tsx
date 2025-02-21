"use client";

import { Consent } from "@/components/Consent/Consent";
import { Container } from "@/components/Container/Container";

export const ACTION_TITLE = "Task";

export const ACTION_INFO_INIT =
  "When ready, click 'Start Task' to begin the primary task";
export const ACTION_LABEL_INIT = "Start Task";

export const ACTION_INFO_COMPLETE =
  'Click "Continue" to proceed to the post-task steps';
export const ACTION_LABEL_COMPLETE = "Continue";

export default function ConsentPage() {
  return (
    <Container>
      <Consent />
    </Container>
  );
}
