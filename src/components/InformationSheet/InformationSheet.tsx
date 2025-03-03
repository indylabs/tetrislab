import { useState } from "react";
import {
  Alert,
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { useStepperContext } from "@/state/StepperContext";
import {
  INFORMATION_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/information-sheet";

export const InformationSheet = () => {
  const { dispatch, isDesktop } = useTetrisLabContext();
  const { step, nextStep } = useStepperContext();

  const [isValid, setIsValid] = useState(false);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_INFO_SHEET", infoSheet: isValid });
    nextStep();
  };

  return (
    <>
      {!isDesktop && (
        <Alert
          variant="filled"
          severity="warning"
          sx={(theme) => ({
            mb: 2,
            [theme.breakpoints.up("sm")]: { mt: 2, mb: 4 },
          })}
        >
          This study must be conducted on a desktop computer.
        </Alert>
      )}

      {isDesktop && (
        <>
          <Alert
            variant="outlined"
            severity="info"
            sx={{ mt: 4, mb: 0, borderColor: "primary.main", color: "white" }}
            icon={<InfoIcon color="primary" />}
          >
            IMPORTANT: You must complete all 8 steps and submit your data at the
            end to participate in this study.
          </Alert>
          <StepAction
            title={`Step ${step} - ${ACTION_TITLE}`}
            info={ACTION_INFO}
            label={ACTION_LABEL}
            onAction={handleOnComplete}
            isValid={isValid}
          />
        </>
      )}

      {INFORMATION_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>{content}</CardContent>
        </Card>
      ))}
      {isDesktop && (
        <Card sx={{ mb: 4, py: 2 }}>
          <FormGroup sx={{ alignItems: "flex-start" }}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  color="secondary"
                  onChange={() => setIsValid((prev) => !prev)}
                />
              }
              label="I have read all sections of this information sheet"
              labelPlacement="start"
            />
          </FormGroup>
        </Card>
      )}
      {!isDesktop && (
        <Alert variant="filled" severity="warning" sx={{ mb: 2 }}>
          This study must be conducted on a desktop computer.
        </Alert>
      )}
    </>
  );
};
