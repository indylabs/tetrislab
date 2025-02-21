import { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import {
  INFORMATION_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/information-sheet";

export const InformationSheet = () => {
  const { dispatch, nextStep } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_INFO_SHEET", infoSheet: isValid });
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

      {INFORMATION_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>{content}</CardContent>
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
          label="I have read all sections of this information sheet"
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
