import Typography from "@mui/material/Typography";

import Logo from "@/components/Logo/Logo";

type TitleProps = {
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  showLogo?: boolean;
};

const Title = ({ variant = "body1", showLogo = true }: TitleProps) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {showLogo && <Logo size="2.5rem" />}
      <div>
        <Typography component="span" variant={variant} color="primary.main">
          Tetris
        </Typography>
        <Typography component="span" variant={variant} color="secondary.main">
          Lab
        </Typography>
      </div>
    </div>
  );
};

export default Title;
