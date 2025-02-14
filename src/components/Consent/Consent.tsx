import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import { StepAction } from "@/components/StepAction/StepAction";

const STEP_ACTION_INFO =
  "Please check all checkboxes to confirm your consent to continue.";
const STEP_ACTION_LABEL = "I agree";

type ConsentProps = { onComplete: () => void };

const CONSENT_ITEMS = [
  {
    id: 1,
    text: "I confirm that I have read and understand the information sheet for the above study and have had the opportunity to ask questions.",
  },
  {
    id: 2,
    text: "I understand that my participation is voluntary and that I am free to withdraw at any time, without giving any reason, without my medical care or legal rights being affected.",
  },
  {
    id: 3,
    text: "I understand that data collected about me during this study will not be identifiable when the research is published.",
  },
  { id: 4, text: "I am over 18 years of age." },
  { id: 5, text: "I have normal or corrected-to-normal vision." },
  { id: 6, text: "I do not have ADHD (Why do we ask this? TODO)." },
  { id: 7, text: "I agree to take part in this study." },
];

export const Consent = ({ onComplete }: ConsentProps) => {
  const [isValid, setIsValid] = useState(false);
  const [consent, setConsent] = useState<(boolean | null)[]>(
    new Array(CONSENT_ITEMS.length).fill(false)
  );

  const handleChange = (id: number) => {
    setConsent((prev) => {
      const newArr = [...prev];
      newArr[id] = !prev[id];
      return newArr;
    });
  };

  useEffect(() => {
    // Check if all consent is given
    setIsValid(consent.every((consent) => consent));
  }, [consent]);

  return (
    <>
      <StepAction
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={onComplete}
        isValid={isValid}
      />
      <List>
        {CONSENT_ITEMS.map(({ id, text }, index) => (
          <ListItem key={id}>
            <ListItemButton>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary={text} />
              <Checkbox onChange={() => handleChange(index)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <StepAction
        info={STEP_ACTION_INFO}
        label={STEP_ACTION_LABEL}
        onComplete={onComplete}
        isValid={isValid}
      />
    </>
  );
};

export default Consent;
