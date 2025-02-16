import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { StepAction } from "@/components/StepAction/StepAction";
import {
  INFORMATION_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/information-sheet";

type InformationSheetProps = {
  onComplete: () => void;
};

export const InformationSheet = ({ onComplete }: InformationSheetProps) => {
  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={true}
      />

      {INFORMATION_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>
            {content.map(({ id, text }) => (
              <Typography key={id}>{text}</Typography>
            ))}
          </CardContent>
        </Card>
      ))}

      <span color="red">
        TODO: Explain in the information sheet why the time/score isnt shown. We
        can state that it is to prevent distraction from the task.{" "}
      </span>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={true}
      />
    </>
  );
};
