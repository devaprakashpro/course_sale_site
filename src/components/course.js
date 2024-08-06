import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputBase,
  styled,
  alpha,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CourseCard from "./coursecard"; // Ensure this import is correct

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(2),
  //   width: "auto",
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "100%",
    paddingLeft: `calc(0.4em + ${theme.spacing(4)})`,
    padding: theme.spacing(1, 1, 1, 1),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      padding: theme.spacing(1, 1, 1, 1),
    },
    "&::placeholder": {
      color: "#004E69", // Change this to your desired color
      opacity: 1, // To make the color fully opaque
      fontSize: "14px",
      "@media (min-width: 768px)": {
        fontSize: "16px",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const allCourses = [
  {
    title: "Java Programming",
    provider: "CubeAISolution Tech",
    image:
      "https://www.zenfotec.com/wp-content/uploads/2018/11/online-java-courses-1.jpg",
    progress: 10,
    date: "2023-07-01",
  },
  {
    title: "React Programming",
    provider: "CubeAISolution Tech",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    progress: 14,
    date: "2024-06-15",
  },
  {
    title: "Php Programming",
    provider: "CubeAISolution Tech",
    image:
      "https://www.btreesystems.com/wp-content/uploads/2023/11/PHP_Training.png",
    progress: 30,
    date: "2024-04-15",
  },
  {
    title: "Python Programming",
    provider: "CubeAISolution Tech",
    image:
      "https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
  },
  {
    title: "C++ Programming",
    provider: "CubeAISolution Tech",
    image: "https://courses.iid.org.in/public//uploads/media_manager/612.jpg",
  },
];

export default function MultiActionAreaCard() {
  const [searchItem, setSearchItem] = useState("");
  const [age, setAge] = React.useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("");
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  const handleSearchoff = () => {
    setIsSearchFocused(false);
  };
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchItem(value);
    if (value) {
      const filteredSuggestions = allCourses.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchItem(title);
    setSuggestions([]);
  };

  const filteredCoursesall = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchItem.toLowerCase())
  );
  const filteredCourses = allCourses.filter(
    (course) => course.progress !== undefined
  );
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortCriteria === "date") {
      return new Date(a.date) + new Date(b.date);
    } else if (sortCriteria === "progress") {
      return a.progress + b.progress;
    }
    return 0;
  });
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          minWidth: "10rem",
          minHeight: "auto",
          position: "relative",
          marginTop: "6rem",
          marginLeft: { xs: "4rem", md: "6rem" },
          marginRight: { xs: "0.1rem", md: "3rem" },
          width: "100%",
          // backgroundColor: "yellow",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              color: "#004E6980",
              fontWeight: 600,
            }}
          >
            Courses
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: { xs: "3rem", md: "3rem" },
              overflow: "hidden",
              ml: { xs: "0.5rem", md: "1rem" },
              alignItems: "center",
              position: "relative",
              top: { xs: "-4px", md: "5px" },
              justifyContent: { xs: "space-between", md: "space-around" },
              // backgroundColor: "yellow",
            }}
          >
            <Search
              sx={{
                border: "2px solid rgba(0, 78, 105, 1)",
                display: "flex",
                alignItems: "center",
                height: { xs: "1.6rem", md: "2.5rem" },
                width: { xs: "9rem" },
                // backgroundColor: "red",
              }}
            >
              {/* <SearchIconWrapper sx={{ backgroundColor: "green" }}>
                <SearchIcon
                  sx={{
                    color: "#004E69",
                    display: { xs: "none", md: "block" },
                    padding: 0,
                    backgroundColor: "blue",
                  }}
                />
              </SearchIconWrapper> */}
              <StyledInputBase
                placeholder={isSearchFocused ? "" : "Search.."}
                value={searchItem}
                name={searchItem}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchoff}
                sx={
                  {
                    // visibility: { xs: "hidden" },
                    // backgroundColor: "grey",
                  }
                }
              />
            </Search>
            {/* ------------------------- */}
            {suggestions.length > 0 && (
              <Paper
                sx={{
                  position: "absolute",
                  zIndex: 4,
                  // backgroundColor: "black",
                  top: { xs: "1rem", md: "6%" },
                  left: { xs: "0%", md: "2%" },
                  right: 0,
                  width: { xs: "150px", md: "240px" },
                }}
              >
                <List>
                  {suggestions.map((suggestion, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      onClick={() => handleSuggestionClick(suggestion.title)}
                    >
                      <ListItemButton>
                        <ListItemText primary={suggestion.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
            <FormControl
              sx={{
                m: 1,
                display: "flex",

                minWidth: { xs: 90, md: 120 },
                padding: { xs: "0px" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid #004E69",
                  },
                  "&:hover fieldset": {
                    border: "2px solid #004E69",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #004E69",
                  },
                  "& .MuiSelect-icon": {
                    color: "#004E69",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#004E69",
                  // backgroundColor: "green",
                  padding: { xs: "2px", md: "10px" },
                },
              }}
              size="small"
            >
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  color: "#004E69",
                  padding: { xs: "0px" },
                  height: { xs: "1.6rem", md: "2.5rem" },
                  fontSize: { xs: "0.840rem", md: "1rem" },
                  top: { xs: "-5px", md: "3px" },
                }}
              >
                Sort by
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Sort by"
                onChange={handleSortChange}
                value={sortCriteria}
                sx={{
                  "& .MuiSelect-root": {
                    border: "2px solid #004E69",
                    color: "#004E69",
                    width: "100px",
                    height: "100%",
                    backgroundColor: "green",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Container>
          {/* my courses container */}
          {!isSearchFocused && (
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  mt: { xs: "1rem" },
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  color: " #004E69",
                  fontWeight: 700,
                }}
              >
                My Courses
              </Typography>

              <Grid container spacing={2}>
                {sortedCourses.map((course, index) => (
                  <Grid item xs={6} sm={3} md={4} key={index}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mt: { xs: 5 },
              mb: { xs: 4 },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              color: " #004E69",
              fontWeight: 700,
            }}
          >
            All Courses
          </Typography>
          <Grid container spacing={2}>
            {filteredCoursesall.map((course, index) => (
              <Grid item xs={6} sm={3} md={3} key={index}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
