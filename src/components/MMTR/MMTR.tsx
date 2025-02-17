"use client";

import { useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

import {
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
  MMTR_DATA,
} from "@/data/mmtr";

type MMTRProps = {
  onComplete: () => void;
};

export const MMTR = ({ onComplete }: MMTRProps) => {
  const { dispatch } = useTetrisLabContext();

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
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleSubmit}
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

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />
    </>
  );
};
