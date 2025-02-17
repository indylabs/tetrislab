import MUIStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

import { STUDY_STEPS } from "@/constants";

type StepperProps = {
  activeStep: number;
};

export const Stepper = ({ activeStep }: StepperProps) => {
  return (
    <Box
      sx={{
        pt: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        textAlign: "left",
      }}
    >
      <MUIStepper activeStep={activeStep} sx={{ p: 0 }}>
        {STUDY_STEPS.map(({ id, title }) => {
          const stepProps: { completed?: boolean } = {};

          return (
            <Step key={id} {...stepProps} sx={{ p: 0 }}>
              <StepLabel color="textPrimary">{title}</StepLabel>
            </Step>
          );
        })}
      </MUIStepper>
    </Box>
  );
};
