import { useEffect, useState } from "react";
import passphraseJS from "passphrase.js";

import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import insertParticipant from "@/app/actions/insertParticipant";
import { StepAction } from "@/components/StepAction/StepAction";

import { ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/finish";

type FinishProps = {
  onComplete: () => void;
};

export const Finish = ({ onComplete }: FinishProps) => {
  const { dispatch, step, state } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [participantCode, setParticipantCode] = useState<string | null>(null);

  useEffect(() => {
    setParticipantCode(
      passphraseJS.genPassPhraseNormal(4, passphraseJS.effLarge)
    );
  }, []);

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

  const handleOnComplete = async () => {
    await insertParticipant(state); // Save state data to database
    // TODO: Add error handling here. Update UI on failure

    onComplete();
  };

  useEffect(() => {
    if (participantCode) {
      dispatch({ type: "ADD_PARTICIPANT_CODE", participantCode });
    }
  }, [dispatch, participantCode]);

  return (
    <>
      <StepAction
        title={`Step ${step + 1} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Participant Code" sx={{ color: "primary.main" }} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography>Your participlant code is:</Typography>
            <Typography color="primary">"{participantCode}"</Typography>
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
          </Box>
          <Typography sx={{ mb: 2 }}>
            Please take note of this code and quote it if you decide to withdraw
            from the study after submission.
          </Typography>

          <FormGroup sx={{ alignItems: "flex-start" }}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  color="secondary"
                  onChange={() => setIsValid((prev) => !prev)}
                />
              }
              label="I have taken note of my participant code"
              labelPlacement="start"
              sx={{ ml: 0 }}
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  );
};
