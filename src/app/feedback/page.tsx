"use client";

import Typography from "@mui/material/Typography";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Feedback() {
  return (
    <PageContainer
      title=""
      style={{
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "auto",
          gap: "2rem",
        }}
      >
        <Typography align="center">
          Feedback is welcome at{" "}
          <a href="mailto:N00236157@student.iadt.ie">
            N00236157@student.iadt.ie
          </a>
        </Typography>
      </div>
    </PageContainer>
  );
}
