import { forwardRef, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import PassiveNotification from "@/components/PassiveNotification/PassiveNotification";
import ActiveNotification from "@/components/ActiveNotification/ActiveNotification";
import Tetris from "@/components/Tetris/Tetris";
import { StepAction } from "@/components/StepAction/StepAction";

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

type TaskProps = {
  onComplete: () => void;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Task = ({ onComplete }: TaskProps) => {
  const { state } = useTetrisLabContext();
  const { variant } = state;

  const [isComplete, setIsComplete] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTetrisComplete = () => {
    setOpen(false);
    setIsComplete(true);
  };

  const handleStepAction = () => {
    if (isComplete) {
      onComplete();
    } else {
      setOpen(true);
    }
  };

  console.log("open:", open);

  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={isComplete ? ACTION_INFO_COMPLETE : ACTION_INFO_INIT}
        label={isComplete ? ACTION_LABEL_COMPLETE : ACTION_LABEL_INIT}
        onAction={handleStepAction}
        isValid={true}
        showAlert={true}
      />

      {!isComplete &&
        TASK_DATA_PRE.map(({ id, text }) => (
          <Card key={id}>
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
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#121212" }}>
          <Toolbar
            sx={{ justifyContent: "flex-end", backgroundColor: "#121212" }}
          >
            <Button
              variant="outlined"
              endIcon={<ExitToAppIcon />}
              onClick={() => window.alert("TODO: Withdraw and exit flow")}
            >
              Withdraw from study
            </Button>
          </Toolbar>
        </AppBar>
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
