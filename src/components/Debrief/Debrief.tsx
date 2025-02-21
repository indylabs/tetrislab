import { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";

import {
  DEBRIEF_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/debrief";

export const Debrief = () => {
  const { dispatch, nextStep } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_DEBRIEF", debrief: isValid });
    nextStep();
  };

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      {DEBRIEF_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>
            {content.map(({ id, text }) => (
              <Typography key={id} sx={{ mb: 2 }}>
                {text}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}

      <FormGroup sx={{ alignItems: "flex-end" }}>
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

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />
    </>
  );
};
