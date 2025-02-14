import MUIStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

import { StudyStepType } from "@/types";

type StepperProps = {
  steps: StudyStepType[];
  activeStep: number;
};

export const Stepper = ({ steps, activeStep }: StepperProps) => {
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
        {steps.map(({ id, title }) => {
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
