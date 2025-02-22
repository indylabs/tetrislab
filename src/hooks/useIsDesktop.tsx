import { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const useIsDesktop = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
  }, []);

  return isLargeScreen && !isTouchDevice;
};

export default useIsDesktop;
