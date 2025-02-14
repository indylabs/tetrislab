import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      />

      {DEBRIEF_DATA.map(({ id, title, content }) => (
        <Card sx={{ mb: 4 }} key={id}>
          <CardHeader title={title} />
          <CardContent>
            {content.map(({ id, text }) => (
              <Typography key={id} sx={{ mb: 2 }}>
                {text}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
