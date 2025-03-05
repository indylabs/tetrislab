import React, { useEffect, useRef, useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";

import insertParticipant from "@/app/actions/insertParticipant";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";
import { useStepperContext } from "@/state/StepperContext";

import { ACTION_TITLE } from "@/data/finish";

const Finish = () => {
  const { state } = useTetrisLabContext();
  const { step } = useStepperContext();
  const { participantCode } = state;

  const [isCopied, setIsCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasAttemptedSave = useRef(false);

  const handleCopy = async () => {
    try {
      if (participantCode) {
        await navigator.clipboard.writeText(participantCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    const saveData = async () => {
      hasAttemptedSave.current = true;

      const { error: errorMessage } = await insertParticipant({
        ...state,
        overallEnd: Date.now()
      }); // Save state data to database

      if (errorMessage) {
        setError(JSON.stringify(errorMessage));
        throw new Error(
          `Error on insertParticipant, Error: ${errorMessage.message}, State: ${state}`
        );
      }

      setIsSaved(true);
    }
    !hasAttemptedSave.current && saveData();
  }, [hasAttemptedSave.current]);

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info=""
        label=""
        onAction={() => {}}
        isValid={false}
      />
      {isSaved && (
        <Alert variant="filled" severity="success" sx={{ color: "white", mb: 4 }}>
        Your data has been saved. Thank you for participating in this study.
      </Alert>
      )}

      {error && (
        <Alert variant="filled" severity="error" sx={{ mb: 4 }}>
        An error occurred while saving your participant data.
        <br />
        ERROR: {error}
      </Alert>
      )}

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Participant Code" sx={{ color: "primary.main" }} />
        <CardContent>
          <Typography
            component="p"
            sx={{
              display: "flex",
              gap: "0.5rem",
              mb: 2,
            }}
          >
            Your participlant code is:
            <Typography
              color="primary"
              component="span"
              data-cy="participant-code"
            >
              &quot;{participantCode}&quot;
            </Typography>
            {isCopied && <CheckCircleIcon color="secondary" />}
            {!isCopied && (
              <Tooltip
                title="Click to copy pass phrase to clipboard"
                sx={{
                  padding: 0,
                  justifyContent: "flex-start",
                }}
              >
                <Button onClick={handleCopy}>
                  <ContentCopyIcon color="secondary" />
                </Button>
              </Tooltip>
            )}
          </Typography>
          <Alert
            variant="outlined"
            severity="info"
            sx={{ mb: 0, borderColor: "primary.main", color: "white" }}
            icon={<InfoIcon color="primary" />}
          >
            Please take note of this code and quote it if you decide to withdraw
            from the study after submission.
          </Alert>
        </CardContent>
      </Card>
    </>
  );
};

export default React.memo(Finish);
