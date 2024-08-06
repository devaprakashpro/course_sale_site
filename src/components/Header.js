import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import "./style/Header.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },

                width: { xs: 45, md: 50 }, // Set your desired width
                height: { xs: 45, md: 50 }, // Set your desired height
                "& svg": { width: "100%", height: "100%" }, // Ensure SVG scales correctly
              }}
            >
              <Logo />
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 1,
                display: { xs: "flex", md: "flex" },
                fontSize: { xs: "1.04rem", md: "1.5rem" },
                fontWeight: 700,
                color: "#2596BE",
                textDecoration: "none",
                textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)", // Medium Shadow
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 0,
                  display: { xs: "flex", md: "flex" },

                  fontWeight: 700,
                  fontSize: { xs: "1.04rem", md: "1.5rem" },
                  color: "#004E69",
                  textDecoration: "none",
                  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)", // Medium Shadow
                }}
              >
                C
              </Typography>
              ube
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  ml: 1,
                  display: { xs: "flex", md: "flex" },
                  fontSize: { xs: "1.04rem", md: "1.5rem" },
                  fontWeight: 700,

                  color: "#004E69",
                  textDecoration: "none",
                  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)", // Medium Shadow
                }}
              >
                M
              </Typography>
              atrix
            </Typography>
            {/* 
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon
                  sx={{
                    fontSize: { xs: 30, md: 36 },
                    color: "#004E69",
                  }}
                />
              </IconButton>
              <IconButton>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1,
                    // Adds space between the icon and text
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      fontSize: { xs: 30, md: 38 },
                      color: "#004E69",
                    }}
                  />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "0.6rem", // Adjust font size if needed
                    }}
                  >
                    username
                  </Typography>
                </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
