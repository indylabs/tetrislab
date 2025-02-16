import { useEffect, useState } from "react";

import { List, ListItem, Checkbox } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { StepAction } from "@/components/StepAction/StepAction";

import {
  REQUIREMENTS_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/requirements";
type RequirementsProps = { onComplete: () => void };

export const Requirements = ({ onComplete }: RequirementsProps) => {
  const [isValid, setIsValid] = useState(false);
  const [requirements, setRequirements] = useState<(boolean | null)[]>(
    new Array(REQUIREMENTS_DATA.length).fill(false)
  );

  const handleChange = (id: number) => {
    setRequirements((prev) => {
      const newArr = [...prev];
      newArr[id] = !prev[id];
      return newArr;
    });
  };

  useEffect(() => {
    // Check if all requirements are met
    setIsValid(requirements.every((requirement) => requirement));
  }, [requirements]);

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />

      <Card sx={{ pb: 0 }}>
        <CardContent>
          <List>
            {REQUIREMENTS_DATA.map(({ id, text }, index) => (
              <ListItem key={id}>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => handleChange(index)}
                        color="secondary"
                      />
                    }
                    label={text}
                  />
                </FormControl>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />
    </>
  );
};
