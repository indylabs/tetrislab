import React from "react";
import { useTheme } from "@mui/material/styles";

type LogoProps = {
  size?: string;
};

const Logo = ({ size = "240px" }: LogoProps) => {
  const theme = useTheme();

  return (
    <div style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="75" height="75" fill={theme.palette.primary.main} />
        <rect
          x="82.5"
          y="82.5"
          width="75"
          height="75"
          fill={theme.palette.primary.main}
        />
        <rect
          y="82.5"
          width="75"
          height="75"
          fill={theme.palette.secondary.main}
        />
        <rect
          y="165"
          width="75"
          height="75"
          fill={theme.palette.secondary.main}
        />
        <rect
          x="82.5"
          y="165"
          width="75"
          height="75"
          fill={theme.palette.secondary.main}
        />
        <rect
          x="82.5"
          width="75"
          height="75"
          fill={theme.palette.primary.main}
        />
        <rect
          x="165"
          width="75"
          height="75"
          fill={theme.palette.primary.main}
        />
      </svg>
    </div>
  );
};

export default Logo;
