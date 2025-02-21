import { Typography, Breadcrumbs, Link, Box } from "@mui/material";

import Logo from "@/components/Logo/Logo";
import Title from "@/components/Title/Title";

type StudyHeaderProps = {
  breadcrumbs: {
    title: string;
    path: string;
  }[];
};

export const StudyHeader = ({ breadcrumbs }: StudyHeaderProps) => {
  return (
    <Box sx={{ py: 2 }}>
      <Breadcrumbs>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            gap: "0.3rem",
          }}
        >
          <Logo size="2rem" /> <Title variant="h5" />
        </span>
        {breadcrumbs.map(({ title, path }, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <Typography key={index} variant="h5" color="white">
                {title}
              </Typography>
            );
          }
          return (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={path}
              sx={{ fontSize: "1.6rem" }}
            >
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};
