import { ImageResponse } from "next/og";

import {
  THEME_PRIMARY_MAIN_COLOR,
  THEME_SECONDARY_MAIN_COLOR,
} from "@/constants";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="75" height="75" fill={THEME_PRIMARY_MAIN_COLOR} />
        <rect
          x="82.5"
          y="82.5"
          width="75"
          height="75"
          fill={THEME_PRIMARY_MAIN_COLOR}
        />
        <rect
          y="82.5"
          width="75"
          height="75"
          fill={THEME_SECONDARY_MAIN_COLOR}
        />
        <rect
          y="165"
          width="75"
          height="75"
          fill={THEME_SECONDARY_MAIN_COLOR}
        />
        <rect
          x="82.5"
          y="165"
          width="75"
          height="75"
          fill={THEME_SECONDARY_MAIN_COLOR}
        />
        <rect x="82.5" width="75" height="75" fill={THEME_PRIMARY_MAIN_COLOR} />
        <rect x="165" width="75" height="75" fill={THEME_PRIMARY_MAIN_COLOR} />
      </svg>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
