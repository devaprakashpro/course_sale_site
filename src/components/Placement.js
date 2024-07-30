import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Placement() {
  return (
    <>
      <Box
        sx={{
          marginTop: "10rem",
          marginLeft: "10rem",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mt: 4,
            fontSize: "1.8rem",
            color: " #004E69",
            fontWeight: 700,
          }}
        >
          It is Placement page
        </Typography>
      </Box>
    </>
  );
}
