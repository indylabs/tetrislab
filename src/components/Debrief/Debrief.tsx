import { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";
import useStepper from "@/hooks/useStepper";

import {
  DEBRIEF_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/debrief";

export const Debrief = () => {
  const { dispatch } = useTetrisLabContext();
  const [step, nextStep] = useStepper();

  const [isValid, setIsValid] = useState(false);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_DEBRIEF", debrief: isValid });
    nextStep();
  };

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      {DEBRIEF_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>{content}</CardContent>
        </Card>
      ))}

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
            label="I have read all sections of this debrief sheet"
            labelPlacement="start"
          />
        </FormGroup>
      </Card>
    </>
  );
};
