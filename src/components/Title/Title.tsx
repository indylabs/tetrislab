import { useTheme } from "@mui/material/styles";

type TitleProps = {
  fontSize?: string;
};

const Title = ({ fontSize = "1.5rem" }: TitleProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        gap: 0,
      }}
    >
      <span
        style={{
          color: theme.palette.primary.main,
          fontSize,
        }}
      >
        Tetris
      </span>
      <span
        style={{
          color: theme.palette.secondary.main,
          fontSize,
        }}
      >
        Lab
      </span>
    </div>
  );
};

export default Title;
