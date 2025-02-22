import Typography from "@mui/material/Typography";

type TitleProps = {
  fontSize?: string;
};

const Title = ({ fontSize = "1.5rem" }: TitleProps) => {
  return (
    <Typography component="h1" style={{ display: "flex", margin: 0 }}>
      <Typography
        component="span"
        color="primary.main"
        fontSize={fontSize}
        lineHeight="2.5rem"
      >
        Tetris
      </Typography>
      <Typography
        component="span"
        color="secondary.main"
        fontSize={fontSize}
        lineHeight="2.5rem"
      >
        Lab
      </Typography>
    </Typography>
  );
};

export default Title;
