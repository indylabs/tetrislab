import Typography from "@mui/material/Typography";

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
};

const Title = ({ variant = "body1" }: TitleProps) => {
  return (
    <span style={{ gap: 0 }}>
      <Typography component="span" variant={variant} color="primary.main">
        Tetris
      </Typography>
      <Typography component="span" variant={variant} color="secondary.main">
        Lab
      </Typography>
    </span>
  );
};

export default Title;
