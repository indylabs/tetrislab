import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

type StudyHeaderProps = {
  breadcrumbs: {
    title: string;
    path: string;
  }[];
};

export const StudyHeader = ({ breadcrumbs }: StudyHeaderProps) => {
  return (
    <Box sx={{ pt: 1 }}>
      <Breadcrumbs>
        {breadcrumbs.map(({ title, path }, index) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <Typography
                key={index}
                sx={{ color: "primary.main", fontSize: "1.6rem" }}
              >
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
