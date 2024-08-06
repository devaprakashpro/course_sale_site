import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import SpeedIcon from "@mui/icons-material/Speed";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TerminalIcon from "@mui/icons-material/Terminal";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useNavigate } from "react-router-dom";


const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  top: 70,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  top: 70,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const RotatedChevronLeftIcon = styled(ChevronLeftIcon)(({ theme, open }) => ({
  transform: open ? "rotate(90deg)" : "none",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const RotatedIcon = styled("div")(({ theme, open }) => ({
  display: "inline-block",
  transform: open ? "rotate(180deg)" : "none",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const iconTextStyles = {
    fontSize: "6.5rem", // Change this value to adjust the size
  };
  const listItemStyles = (index) => ({
    bgcolor: selectedIndex === index ? "#E5F1FF" : "transparent",
    color: selectedIndex === index ? "#004E69" : "#2596BE",
    "&:hover": {
      bgcolor: selectedIndex === index ? "#E5F1FF" : "action.hover",
      ...iconTextStyles,
    },
  });
  const iconStyles = (index) => ({
    color: selectedIndex === index ? "#004E69" : "#2596BE",
    ...iconTextStyles,
  });
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 3) {
      navigate("/course");
    } else if (index === 1) {
      navigate("/dashbar");
    } else if (index === 0) {
      navigate("/Home");
    } else if (index === 2) {
      navigate("/placement");
    } else if (index === 5) {
      navigate("/Compiler");
    }
  };
  const handleDrawerOpen = () => {
    setOpen((preopen) => !preopen);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          backgroundColor: "#E5F1FF",
          "& .MuiDrawer-paper": {
            backgroundColor: "#E5F1FF",
            color: "#2596BE",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            {theme.direction === "rtl" ? (
              <RotatedIcon open={open}>
                <ChevronRightIcon />
              </RotatedIcon>
            ) : (
              <RotatedIcon open={open}>
                <ChevronRightIcon />
              </RotatedIcon>
            )}
          </IconButton>
        </DrawerHeader>

        <List sx={{ backgroundColor: "transparent", p: 0 }}>
          {" "}
          {/* Adjust padding if needed */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              sx={listItemStyles(0)}
            >
              <ListItemIcon sx={iconStyles(0)}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
              sx={listItemStyles(1)}
            >
              <ListItemIcon sx={iconStyles(1)}>
                <SpeedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
              sx={listItemStyles(2)}
            >
              <ListItemIcon sx={iconStyles(2)}>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Placement" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
              // onClick={handleClick}
              sx={listItemStyles(3)}
            >
              <ListItemIcon sx={iconStyles(3)}>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
              sx={listItemStyles(4)}
            >
              <ListItemIcon sx={iconStyles(4)}>
                <PendingActionsIcon />
              </ListItemIcon>
              <ListItemText primary="Assessments" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
              sx={listItemStyles(5)}
            >
              <ListItemIcon sx={iconStyles(5)}>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText primary="Compiler" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
              sx={listItemStyles(6)}
            >
              <ListItemIcon sx={iconStyles(6)}>
                <WorkspacePremiumIcon />
              </ListItemIcon>
              <ListItemText primary="Certifications" />
            </ListItemButton>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
