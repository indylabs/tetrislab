import { useState } from "react";

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

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";
import { useStepperContext } from "@/state/StepperContext";

import { ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/finish";

type FinishProps = {
  onComplete: () => void;
  isError: boolean;
  isSaved: boolean;
};

export const Finish = ({
  onComplete,
  isError = false,
  isSaved = false,
}: FinishProps) => {
  const { state } = useTetrisLabContext();
  const { step } = useStepperContext();
  const { participantCode } = state;

  const [isCopied, setIsCopied] = useState(false);

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
    onComplete();
  };

  if (isError) {
    return (
      <>
        <StepAction
          title={`Step ${step} - ${ACTION_TITLE}`}
          label={ACTION_LABEL}
          onAction={handleOnComplete}
          isValid={true}
        />
        <Alert variant="filled" severity="error">
          An error occurred while saving your participant data.
        </Alert>
      </>
    );
  }

  if (isSaved) {
    return (
      <>
        <StepAction
          title={`Step ${step} - ${ACTION_TITLE}`}
          label={ACTION_LABEL}
          onAction={handleOnComplete}
          isValid={false}
        />
        <Alert variant="filled" severity="success">
          Your data has been saved. Thank you for participating. You may now
          close this browser tab.
        </Alert>
      </>
    );
  }

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={true}
      />

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
            <Typography color="primary" component="span">
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

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Save and Finish" sx={{ color: "primary.main" }} />
        <CardContent>
          <Typography sx={{ mb: 2 }}>
            Click &quot;Save and Finish&quot; to submit your data and complete
            the study.
          </Typography>
          <Alert
            variant="outlined"
            severity="info"
            sx={{ mb: 0, borderColor: "primary.main", color: "white" }}
            icon={<InfoIcon color="primary" />}
          >
            You are about to submit data collected during this experiment for
            use in this study.
          </Alert>
        </CardContent>
      </Card>
    </>
  );
};
