import { useEffect, useState } from "react";
import passphraseJS from "passphrase.js";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import insertParticipant from "@/app/actions/insertParticipant";
import { StepAction } from "@/components/StepAction/StepAction";

import { ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/finish";

type FinishProps = {
  onComplete: () => void;
};

export const Finish = ({ onComplete }: FinishProps) => {
  const { dispatch, state } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
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

  const onHandleComplete = () => {
    if (participantCode) {
      dispatch({ type: "ADD_PARTICIPANT_CODE", participantCode });
      setIsFinished(true);
    }
  };

  useEffect(() => {
    if (isFinished) {
      insertParticipant(state); // Save state data to database
      onComplete();
    }
  }, [isFinished, onComplete, state]);

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onHandleComplete}
        isValid={isValid}
      />

      <Card sx={{ mb: 4, p: 2, pb: 0 }}>
        <CardHeader title="Participant Code" sx={{ color: "primary.main" }} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography>Your participlant code is:</Typography>
            <Typography sx={{ fontSize: "1.6rem" }} color="primary">
              {participantCode}
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
          </Box>
          <Typography sx={{ mb: 2 }}>
            Please take note of this code and quote it if you decide to withdraw
            from the study after submission.
          </Typography>
        </CardContent>
      </Card>

      <FormGroup sx={{ alignItems: "flex-end" }}>
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
        />
      </FormGroup>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onHandleComplete}
        isValid={isValid}
      />
    </>
  );
};
