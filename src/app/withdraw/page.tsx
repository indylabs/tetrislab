"use client";

import { Container } from "@/components/Container/Container";
import { Card, CardContent, Typography } from "@mui/material";

export default function WithdrawPage() {
  return (
    <>
      <Container showStepper={false}>
        <Card>
          <CardContent>
            <Typography sx={{ my: "1rem" }}>
              You have now withdrawn from the study. No data associated with
              your participation has been recorded.
            </Typography>

            <Typography sx={{ my: "1rem" }}>
              You may now close your browser tab.
            </Typography>

            <Typography sx={{ my: "1rem" }}>Thank You.</Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
