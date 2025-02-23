import { forwardRef, useState } from "react";

import { Card, CardContent, Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";
import ActiveNotification from "@/components/ActiveNotification/ActiveNotification";
import Tetris from "@/components/Tetris/Tetris";
import { StepAction } from "@/components/StepAction/StepAction";
import { useStepperContext } from "@/state/StepperContext";

import { VARIANTS } from "@/constants";

import {
  TASK_DATA_PRE,
  TASK_DATA_POST,
  ACTION_TITLE,
  ACTION_INFO_COMPLETE,
  ACTION_INFO_INIT,
  ACTION_LABEL_COMPLETE,
  ACTION_LABEL_INIT,
} from "@/data/task";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Task = () => {
  const { state } = useTetrisLabContext();
  const { variant } = state;
  const { step, nextStep } = useStepperContext();

  const [isComplete, setIsComplete] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTetrisComplete = () => {
    setOpen(false);
    setIsComplete(true);
  };

  const handleStepAction = () => {
    if (isComplete) {
      nextStep();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info={isComplete ? ACTION_INFO_COMPLETE : ACTION_INFO_INIT}
        label={isComplete ? ACTION_LABEL_COMPLETE : ACTION_LABEL_INIT}
        onAction={handleStepAction}
        isValid={true}
      />

      {!isComplete &&
        TASK_DATA_PRE.map(({ id, text }) => (
          <Card key={id} sx={{ mb: 4 }}>
            <CardContent>{text}</CardContent>
          </Card>
        ))}

      {isComplete &&
        TASK_DATA_POST.map(({ id, text }) => (
          <Card key={id}>
            <CardContent>{text}</CardContent>
          </Card>
        ))}

      <Dialog
        fullScreen
        open={open}
        slots={{
          transition: Transition,
        }}
        sx={{ mt: "65px" }}
      >
        <DialogContent
          sx={{
            backgroundColor: "#121212",
            display: "flex",
          }}
        >
          <Tetris onComplete={() => handleTetrisComplete()} />
          {variant === VARIANTS.A && <PassiveNotification />}
          {variant === VARIANTS.B && <ActiveNotification />}
        </DialogContent>
      </Dialog>
    </>
  );
};
