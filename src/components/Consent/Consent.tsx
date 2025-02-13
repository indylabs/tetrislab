import Button from "@mui/material/Button";

const Consent = ({ onComplete }) => {
  return (
    <>
      <p>This is Consent</p>
      <Button onClick={onComplete}>Continue</Button>
    </>
  );
};

export default Consent;
