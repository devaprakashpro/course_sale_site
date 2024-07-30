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
          maxWidth: 295,
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            src={course.image}
            alt="course image"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#004E69",
                }}
              >
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CubeAISolution Tech
              </Typography>
            </Box>
            <Box>
              {course.progress ? (
                <CircularProgressWithLabel value={course.progress} />
              ) : (
                ""
              )}
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
            color="primary"
            sx={{
              backgroundColor: "blue",
              color: "#ffff",
              padding: "5px 20px",
            }}
          >
            {course.progress ? "Resume" : "Enroll"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
