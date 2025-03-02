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
import { useStepperContext } from "@/state/StepperContext";

import {
  CONSENT_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/consent";

import { ConsentType } from "@/types";

export const Consent = () => {
  const { dispatch } = useTetrisLabContext();
  const { step, nextStep } = useStepperContext();

  const [isValid, setIsValid] = useState(false);
  const [consent, setConsent] = useState<(ConsentType | null)[]>(
    new Array(CONSENT_DATA.length).fill(null)
  );

  const handleChange = (id: number, index: number) => {
    setConsent((prev) => {
      const newArr = [...prev];
      newArr[index] = {
        id,
        response: true,
      };
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
        title={`Step ${step} - ${ACTION_TITLE}`}
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
                    required
                    control={
                      <Checkbox
                        onChange={() => handleChange(id, index)}
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
    </>
  );
};

export default Consent;
