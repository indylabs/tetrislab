import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { StepAction } from "@/components/StepAction/StepAction";

import {
  DEBRIEF_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/debrief";

type DebriefProps = {
  onComplete: () => void;
};

export const Debrief = ({ onComplete }: DebriefProps) => {
  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={true}
        showAlert={true}
      />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            Title of Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ mb: 2 }}>
            &quot;TetrisLab: Exploring the Differential Effects of Interrupting
            📢 and Distracting 👋 UI Notifications on Flow 🧘 and Performance
            📈&quot;
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
