import { Stepper as MUIStepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { STUDY_STEPS } from "@/constants";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#ffffff80",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

type StepperProps = {
  activeStep: number;
};

export const Stepper = ({ activeStep }: StepperProps) => {
  return (
    <MUIStepper
      activeStep={activeStep}
      sx={{ pt: 1, mt: 2 }}
      alternativeLabel
      connector={<QontoConnector />}
    >
      {STUDY_STEPS.map(({ id, title }) => {
        const stepProps: { completed?: boolean } = {};

        return (
          <Step key={id} {...stepProps}>
            <StepLabel>{title}</StepLabel>
          </Step>
        );
      })}
    </MUIStepper>
  );
};
