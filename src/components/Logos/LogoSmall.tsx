import React from "react";

type LogoProps = {
  className?: string;
};

const LogoSmall = ({ className }: LogoProps) => (
  <div className={className}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12.5" height="12.5" fill="#82259E" />
      <rect x="13.75" y="13.75" width="12.5" height="12.5" fill="#82259E" />
      <rect y="13.75" width="12.5" height="12.5" fill="#3B1FB6" />
      <rect y="27.5" width="12.5" height="12.5" fill="#3B1FB6" />
      <rect x="13.75" y="27.5" width="12.5" height="12.5" fill="#3B1FB6" />
      <rect x="13.75" width="12.5" height="12.5" fill="#82259E" />
      <rect x="27.5" width="12.5" height="12.5" fill="#82259E" />
    </svg>
  </div>
);

export default LogoSmall;
