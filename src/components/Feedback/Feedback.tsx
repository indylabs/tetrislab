import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

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
