import { useEffect, useState } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

import { StepAction } from "@/components/StepAction/StepAction";

const STEP_ACTION_INFO =
  "Please check all checkboxes to confirm that you meet these requirements to continue.";

const STEP_ACTION_LABEL = "I meet these requirements";

const REQUIREMENTS_ITEMS = [
  {
    id: 1,
    text: "Must have access to a desktop computer with a modern browser",
  },
  { id: 2, text: "etc (TBC)" },
];

type RequirementsProps = { onComplete: () => void };

export const Requirements = ({ onComplete }: RequirementsProps) => {
  const [isValid, setIsValid] = useState(false);
  const [requirements, setRequirements] = useState<(boolean | null)[]>(
    new Array(REQUIREMENTS_ITEMS.length).fill(false)
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
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={onComplete}
        isValid={isValid}
      />

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <List>
            {REQUIREMENTS_ITEMS.map(({ id, text }, index) => (
              <ListItem key={id}>
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentLateIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <Checkbox onChange={() => handleChange(index)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <StepAction
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={onComplete}
        isValid={isValid}
      />
    </>
  );
};
