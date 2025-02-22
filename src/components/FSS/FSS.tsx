"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";

import { FSS_DATA, ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/ffs";

export const FSS = () => {
  const { dispatch, step, nextStep } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);
  const [fss, setFSS] = useState<(number | null)[]>(
    new Array(FSS_DATA.length).fill(null)
  );

  const handleChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = id - 1;
    const value = parseInt((event.target as HTMLInputElement).value);

    setFSS((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
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
        title={`Step ${step + 1} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />

      {FSS_DATA.map(({ id, dimension, questions }) => {
        return (
          <Box key={id}>
            <Typography
              component="h2"
              variant="h5"
              color="primary"
              sx={{ mb: 4 }}
            >
              {dimension}
            </Typography>
            {questions.map(({ id, text, responses }) => (
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
            ))}
          </Box>
        );
      })}
    </>
  );
};
