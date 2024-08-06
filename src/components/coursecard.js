import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import PropTypes from "prop-types";

// CircularProgressWithLabel component definition
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

// CourseCard component definition
export default function CourseCard({ course }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 35) {
          clearInterval(timer);
          return 35; // Stop at 35%
        }
        return prevProgress + 5;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <Card
        sx={{
          maxWidth: { xs: 130, md: 295 },
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            src={course.image}
            alt="course image"
            sx={{
              // height: { xs: "100px", md: "150px" },
              width: { xs: "100%" },
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: "10px", md: "1rem" },
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: { xs: "11px", md: "20px" },
                  fontWeight: 700,
                  margin: 0,
                  color: "#004E69",
                }}
              >
                {course.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "10px", md: "16px" } }}
              >
                CubeAISolution Tech
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "90px", sm: "150px" },
                  display: { xs: "flex" },
                  justifyContent: { md: "center" },
                  alignItems: "center",
                }}
              >
                {course.progress ? (
                  <CircularProgressWithLabel value={course.progress} />
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#004E69",
              color: "#ffff",
              fontSize: { xs: "0.7rem", md: "1rem" },
              padding: { xs: "2px 10px", md: "5px 20px" },
            }}
          >
            {course.progress ? "Resume" : "Enroll"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
