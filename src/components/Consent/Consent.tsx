import Button from "@mui/material/Button";

type ConsentProps = { onComplete: () => void };

const Consent = ({ onComplete }: ConsentProps) => {
  return (
    <>
      <p>This is Consent</p>
      <Button onClick={onComplete}>Continue</Button>
    </>
  );
};

export default Consent;
