import MUIStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

type StepperProps = {
  steps: { id: string; title: string }[];
  activeStep: number;
};

export const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        textAlign: "left",
      }}
    >
      <MUIStepper activeStep={activeStep}>
        {steps.map(({ id, title }) => {
          const stepProps: { completed?: boolean } = {};

          return (
            <Step key={id} {...stepProps}>
              <StepLabel color="textPrimary">{title}</StepLabel>
            </Step>
          );
        })}
      </MUIStepper>
    </Box>
  );
};
