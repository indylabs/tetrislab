import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Checkbox,
  Card,
  CardContent,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";

import {
  CONSENT_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/consent";

export const Consent = () => {
  const { dispatch, nextStep } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [consent, setConsent] = useState<boolean[]>(
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

  const handleOnComplete = () => {
    dispatch({ type: "ADD_CONSENT", consent });
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

      <Card>
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
                    labelPlacement="start"
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
        onAction={handleOnComplete}
        isValid={isValid}
      />
    </>
  );
};

export default Consent;
