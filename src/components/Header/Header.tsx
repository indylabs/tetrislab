import { Typography, Breadcrumbs, Box } from "@mui/material";

import Title from "@/components/Title/Title";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box sx={{ py: 2 }}>
      <Breadcrumbs>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Title variant="h4" />
        </span>

        <Typography variant="h4" color="white">
          {title}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
