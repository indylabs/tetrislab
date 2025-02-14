"use client";

import { useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

import styles from "./mmrt.module.scss";

import { mmtrScale } from "@/data/scales";

const STEP_ACTION_INFO =
  "Please answer all questions on Media Multitasking-Revised (MMT-R) Questionnaire to continue.";

const STEP_ACTION_LABEL = "Submit questionnaire";

type MMTRProps = {
  onComplete: () => void;
};

export const MMTR = ({ onComplete }: MMTRProps) => {
  const { dispatch } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [mmtr, setMmtr] = useState<(number | null)[]>(
    new Array(mmtrScale.length).fill(null)
  );

  const handleChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = id - 1;
    const value = parseInt((event.target as HTMLInputElement).value);

    setMmtr((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
  };

  const handleSubmit = () => {
    dispatch({ type: "ADD_MMTR", mmtr });
    onComplete();
  };

  useEffect(() => {
    // Check if all items are responded to
    setIsValid(mmtr.every((response) => response));
  }, [mmtr]);

  return (
    <>
      <StepAction
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={handleSubmit}
        isValid={isValid}
      />

      {mmtrScale.map(({ id, text, responses }) => {
        return (
          <FormControl key={id}>
            <FormLabel>
              {id}. {text}
            </FormLabel>
            <br />
            <RadioGroup
              row
              onChange={(event) => handleChange(id, event)}
              className={styles.radioGroup}
            >
              {responses.map(({ value, label }) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                  key={value}
                />
              ))}
            </RadioGroup>
            <br />
            <br />
          </FormControl>
        );
      })}

      <StepAction
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={onComplete}
        isValid={isValid}
      />
    </>
  );
};
