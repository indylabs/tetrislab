import * as React from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type RequirementsProps = { onComplete: () => void };

export const Requirements = ({ onComplete }: RequirementsProps) => {
  const handleContinue = () => {
    onComplete();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <div>
          <Alert severity="warning">Alert about requirements section</Alert>
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={handleContinue}
            endIcon={<ArrowRightIcon />}
          >
            Continue
          </Button>
        </div>
      </Box>

      <p>Requirements go here</p>
    </>
  );
};
