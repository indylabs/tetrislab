import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { StepAction } from "@/components/StepAction/StepAction";
import {
  INFORMATION_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/information-sheet";

type InformationSheetProps = {
  onComplete: () => void;
};

export const InformationSheet = ({ onComplete }: InformationSheetProps) => {
  const [isValid, setIsValid] = useState(false);

  const handleCheck = () => {
    setIsValid((prev) => !prev);
  };

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
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
          control={<Checkbox color="secondary" onChange={handleCheck} />}
          label="I have read all sections of this information sheet"
          labelPlacement="start"
        />
      </FormGroup>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />
    </>
  );
};
