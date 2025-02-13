"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

import styles from "./mmrt.module.scss";

import { mmtrScale } from "@/data/scales";

const MMTR = () => {
  const router = useRouter();
  const { dispatch } = useTetrisLabContext();

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
  };

  return (
    <div className={styles.mmrt}>
      <Typography
        color="primary"
        align="center"
        gutterBottom={true}
        variant="h3"
        component="p"
      >
        Media Multitasking-Revised (MMT-R) Scale
      </Typography>

      <Container maxWidth="md">
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
      </Container>
      <br />
      <Button
        onClick={handleSubmit}
        variant="contained"
        endIcon={<NavigateNextIcon />}
        disabled={mmtr.includes(null)}
        className={styles.submit}
      >
        Continue
      </Button>
      <br />
    </div>
  );
};

export default MMTR;
