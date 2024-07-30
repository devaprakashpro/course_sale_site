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
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      color: "#004E69", // Change this to your desired color
      opacity: 1, // To make the color fully opaque
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
    title: "HTML",
    provider: "CubeAISolution Tech",
    image: "https://www.a2itsoft.com/uploads/1562399438.png",
    progress: 43,
    date: "2024-08-15",
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
          marginLeft: "6rem",
          marginRight: "3rem",
          width: "100%",
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
              fontSize: "1.6rem",
              color: "#004E6980",
              fontWeight: 600,
            }}
          >
            Courses
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "3rem",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <Search
              sx={{
                border: "2px solid rgba(0, 78, 105, 1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: "#004E69",
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={isSearchFocused ? "" : "Search.."}
                value={searchItem}
                name={searchItem}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchoff}
              />
            </Search>
            {suggestions.length > 0 && (
              <Paper
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  top: "6%",
                  left: "69%",
                  right: 0,
                  width: "240px",
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
                minWidth: 120,
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
                },
              }}
              size="small"
            >
              <InputLabel
                id="demo-select-small-label"
                sx={{ color: "#004E69" }}
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
                  fontSize: "1.8rem",
                  color: " #004E69",
                  fontWeight: 700,
                }}
              >
                My Courses
              </Typography>
              {/* ---------------------- */}
              {/* <Grid container spacing={3}>
                {allCourses
                  .filter((course) => course.progress !== undefined)
                  .map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <CourseCard course={course} />
                    </Grid>
                  ))}
              </Grid> */}
              <Grid container spacing={3}>
                {sortedCourses.map((course, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
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
              mt: 4,
              fontSize: "1.8rem",
              color: " #004E69",
              fontWeight: 700,
            }}
          >
            All Courses
          </Typography>
          <Grid container spacing={3}>
            {filteredCoursesall.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
