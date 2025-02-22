"use client";

import { useEffect, useState } from "react";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

import {
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
  MMTR_DATA,
} from "@/data/mmtr";

export const MMTR = () => {
  const { dispatch, step, nextStep } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [mmtr, setMmtr] = useState<(number | null)[]>(
    new Array(MMTR_DATA.length).fill(null)
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

  const handleOnComplete = () => {
    dispatch({ type: "ADD_MMTR", mmtr });
    nextStep();
  };

  useEffect(() => {
    // Check if all items are responded to
    setIsValid(mmtr.every((response) => response));
  }, [mmtr]);

  return (
    <>
      <StepAction
        title={`Step ${step + 1} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      {MMTR_DATA.map(({ id, text, responses }) => {
        return (
          <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
            <CardHeader
              title={`Question ${id}`}
              sx={{ color: "primary.main" }}
            />
            <CardContent sx={{ p: 0 }}>
              <FormControl>
                <FormControlLabel
                  sx={{
                    alignItems: "flex-start",
                  }}
                  control={
                    <RadioGroup
                      row
                      onChange={(event) => handleChange(id, event)}
                      sx={{ mt: 2 }}
                    >
                      {responses.map(({ value, label }) => (
                        <FormControlLabel
                          value={value}
                          control={<Radio color="secondary" />}
                          label={label}
                          key={value}
                        />
                      ))}
                    </RadioGroup>
                  }
                  label={text}
                  labelPlacement="top"
                />
              </FormControl>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
