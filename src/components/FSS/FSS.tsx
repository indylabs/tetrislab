"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

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

  const handleSubmit = () => {
    //TODO: Enable dispatch here
    // dispatch({ type: "ADD_FSS", fss });
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
        onAction={handleSubmit}
        isValid={isValid}
      />

      {FSS_DATA.map(({ id, dimension, questions }) => {
        return (
          <Box key={id}>
            <Typography
              gutterBottom={true}
              component="h2"
              variant="h6"
              color="primary"
              sx={{ mb: 4 }}
            >
              {dimension}
            </Typography>
            {questions.map(({ id, text, responses }) => (
              <Card sx={{ minWidth: 275, mb: 4 }} key={id}>
                <CardContent>
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
                      label={`${id}. ${text}`}
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
        onAction={onComplete}
        isValid={isValid}
      />
    </>
  );
};
