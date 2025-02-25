"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/Container/Container";
import { Finish } from "@/components/Finish/Finish";
import insertParticipant from "@/app/actions/insertParticipant";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function FinishPage() {
  const { dispatch, state } = useTetrisLabContext();
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    dispatch({ type: "ADD_OVERALL_END" });
  }, [dispatch]);

  const handleOnComplete = async () => {
    const { error } = await insertParticipant(state); // Save state data to database

    if (error) {
      setIsError(true);
      throw new Error(
        `Error on insertParticipant, Error: ${error.message}, State: ${state}`
      );
    }

    dispatch({ type: "RESET_STATE" });
    setIsSaved(true);
  };

  return (
    <Container showStepper={!isError}>
      <Finish
        onComplete={handleOnComplete}
        isError={isError}
        isSaved={isSaved}
      />
    </Container>
  );
}
