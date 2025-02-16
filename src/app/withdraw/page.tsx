"use client";

import { PageContainer } from "@toolpad/core/PageContainer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function WithdrawPage() {
  const { step, nextStep } = useTetrisLabContext();

  return (
    <>
      <PageContainer
        title=""
        slots={{
          header: () => (
            <StudyHeader
              breadcrumbs={[
                { title: "Withdraw From Study", path: "/withdraw" },
              ]}
            />
          ),
        }}
      >
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
      </PageContainer>
    </>
  );
}
