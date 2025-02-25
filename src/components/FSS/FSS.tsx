"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";
import { useStepperContext } from "@/state/StepperContext";

import { FSS_DATA, ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/ffs";

import type { ScaleResponseType } from "@/types";

export const FSS = () => {
  const { dispatch } = useTetrisLabContext();
  const { step, nextStep } = useStepperContext();

  const [isValid, setIsValid] = useState(false);
  const [fss, setFSS] = useState<(ScaleResponseType | null)[]>(
    new Array(FSS_DATA.length).fill(null)
  );

  const handleChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Get question
    const questionIndex = id - 1;
    const { responses, ...question } = FSS_DATA[questionIndex];

    // Get response
    const responseValue = Number((event.target as HTMLInputElement).value);
    const response = responses.find(
      (response) => response.value === responseValue
    );

    if (question && response) {
      setFSS((prev) => {
        const newArr = [...prev];
        newArr[questionIndex] = {
          question,
          response,
        };
        return newArr;
      });
    }
  };

  const handleOnComplete = () => {
    dispatch({ type: "ADD_FSS", fss });
    nextStep();
  };

  useEffect(() => {
    // Check if all items are responded to
    setIsValid(fss.every((response) => response));
  }, [fss]);

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      {FSS_DATA.map(({ id, text, responses }) => {
        return (
          <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
            <CardHeader
              title={`Question ${id}`}
              sx={{
                color: "primary.main",
              }}
            />
            <CardContent sx={{ p: 0 }}>
              <FormControl key={id}>
                <FormControlLabel
                  required
                  sx={{
                    alignItems: "flex-start",
                    mb: 0,
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
