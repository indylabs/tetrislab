import { useEffect, useState } from "react";
import { List, ListItem, Checkbox } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { StepAction } from "@/components/StepAction/StepAction";

import {
  CONSENT_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/consent";

type ConsentProps = { onComplete: () => void };

export const Consent = ({ onComplete }: ConsentProps) => {
  const [isValid, setIsValid] = useState(false);
  const [consent, setConsent] = useState<(boolean | null)[]>(
    new Array(CONSENT_DATA.length).fill(false)
  );

  const handleChange = (id: number) => {
    setConsent((prev) => {
      const newArr = [...prev];
      newArr[id] = !prev[id];
      return newArr;
    });
  };

  useEffect(() => {
    // Check if all consent is given
    setIsValid(consent.every((consent) => consent));
  }, [consent]);

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <List>
            {CONSENT_DATA.map(({ id, text }, index) => (
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

export default Consent;
