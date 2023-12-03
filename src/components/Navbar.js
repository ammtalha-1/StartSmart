import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../img/Start Smart.gif";
import "../style/Navbar.css";
import { useContext } from "react";
import { global } from "../App";

const pages = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/About" },
  { name: "Services", link: "/Services" },
  { name: "Contact Us", link: "/ContactUs" },
];

const Navbar = () => {
  const { user, setUser } = useContext(global);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} className="appbar">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} className="logoImg" />
            </Link>
          </Box>
          {!!user ? (
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  marginRight: "60px",
                }}
              >
                {pages.map((page) => (
                  <Link to={page.link}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box style={{ display: "flex" }}>
                <Link to="/SignUp" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="Meduim"
                    color="success"
                    className="navButton"
                  >
                    Get Register
                  </Button>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    className="menuButton"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Link to={page.link}>
                          <Typography textAlign="center">
                            {page.name}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Link to="/">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setUser(!user);
                  }}
                >
                  Log out
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
