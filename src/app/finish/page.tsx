"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/Container/Container";
import { Finish } from "@/components/Finish/Finish";
import insertParticipant from "@/app/actions/insertParticipant";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function FinishPage() {
  const { dispatch, state } = useTetrisLabContext();
  const [error, setError] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    dispatch({ type: "ADD_OVERALL_END" });
  }, [dispatch]);

  const handleOnComplete = async () => {
    const { error: errorMessage } = await insertParticipant(state); // Save state data to database

    if (errorMessage) {
      setError(JSON.stringify(errorMessage));
      throw new Error(
        `Error on insertParticipant, Error: ${errorMessage.message}, State: ${state}`
      );
    }

    dispatch({ type: "RESET_STATE" });
    setIsSaved(true);
  };

  return (
    <Container>
      <Finish onComplete={handleOnComplete} error={error} isSaved={isSaved} />
    </Container>
  );
}
