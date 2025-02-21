import { Typography, Link, Box } from "@mui/material";

const Feedback = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
      <Box>
        <Typography
          sx={{ color: "primary.main", fontSize: "2.4rem", mb: 4 }}
          gutterBottom={true}
        >
          Feedback
        </Typography>

        <Typography align="center">
          Feedback is welcome at{" "}
          <Link href="mailto:N00236157@student.iadt.ie" color="secondary">
            N00236157@student.iadt.ie
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Feedback;
