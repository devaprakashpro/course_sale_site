import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Correct import for ThemeProvider and createTheme
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/Header";
import MiniDrawer from "./components/sidemenu";
import Course from "./components/course";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashbar from "./components/dashbar";
import Home from "./components/Home";
import Placement from "./components/Placement";
import Compiler from "./components/Compiler";

// Create a theme with custom zIndex values
const theme = createTheme({
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    customLayer: 1600, // Add your custom zIndex
  },
  bashbar: {
    zIndex: 100,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Correct usage of CssBaseline */}
      <Router>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* AppBar */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              position: "fixed",
              zIndex: (theme) => theme.zIndex.drawer, // Ensure AppBar has the highest zIndex
            }}
          >
            <ResponsiveAppBar />
          </Grid>

          {/* Drawer */}
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            sx={{
              position: "relative",
              zIndex: (theme) => theme.zIndex.appBar, // Drawer should be below AppBar
              backgroundColor: "lightgrey",
            }}
          >
            <MiniDrawer />
          </Grid>

          {/* Main Content */}
          <Grid item xs={8} sm={8} md={12}>
            <Routes>
              <Route path="/course" element={<Course />} />
              <Route path="/dashbar" element={<Dashbar />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Placement" element={<Placement />} />
              <Route path="/Compiler" element={<Compiler />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
