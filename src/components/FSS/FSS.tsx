"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";

import { FSS_DATA, ACTION_TITLE, ACTION_INFO, ACTION_LABEL } from "@/data/ffs";

type FFSProps = {
  onComplete: () => void;
};

export const FSS = ({ onComplete }: FFSProps) => {
  const { dispatch } = useTetrisLabContext();

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
    onComplete();
  };

  useEffect(() => {
    // Check if all items are responded to
    setIsValid(fss.every((response) => response));
  }, [fss]);

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
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

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />
    </>
  );
};
