import Typography from "@mui/material/Typography";

import Logo from "@/components/Logo/Logo";

type TitleProps = {
  showLogo?: boolean;
};

const Title = ({ showLogo = true }: TitleProps) => {
  return (
    <Typography
      style={{
        display: "flex",
        margin: 0,
        paddingLeft: "0.75rem",
        gap: "0.25rem",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {showLogo && <Logo size="1.8rem" />}
      <div>
        <Typography component="span" color="primary.main" fontSize={"1.5rem"}>
          Tetris
        </Typography>
        <Typography component="span" color="secondary.main" fontSize={"1.5rem"}>
          Lab
        </Typography>
      </div>
    </Typography>
  );
};

export default Title;
