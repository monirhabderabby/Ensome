import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";

const pages = ["Home", "Solution", "Pages", "Elements", "Blog", "Contacts"];

const menuSX = {
    backgroundColor: "#FFFFFF",
    color: "#9497A1",
    "&:hover": {
        backgroundColor: "transparent",
    },
};

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const watchButtonSX = {
        backgroundColor: "#185CFF",
        color: "#FFFFFF",
        fontSize: "14px",
        letterSpacing: "-0.01em",
        borderRadius: "6px",
    };

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#FFFFFF",
                height: "80px",
                color: "#292D33",
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: "#FFFFFF",
                },
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className="hidden md:block">
                        <img src={logo} alt="logo" />
                    </div>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            {pages.map(page => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={menuSX}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            textTransform: "capitalize",
                            columnGap: "40px",
                        }}
                    >
                        <NavLink to="/">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "text-black text-[14px] font-manrope font-semibold"
                                            : "text-[#9497A1] text-[14px] font-manrope font-medium hover:text-black duration-300"
                                    }
                                >
                                    Home
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="/solution">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "text-black text-[14px] font-manrope font-semibold"
                                            : "text-[#9497A1] text-[14px] font-manrope font-medium hover:text-black duration-300"
                                    }
                                >
                                    Solution
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="/elements">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "text-black text-[14px] font-manrope font-semibold"
                                            : "text-[#9497A1] text-[14px] font-manrope font-medium hover:text-black duration-300"
                                    }
                                >
                                    Elements
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="/blog">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "text-black text-[14px] font-manrope font-semibold"
                                            : "text-[#9497A1] text-[14px] font-manrope font-medium hover:text-black duration-300"
                                    }
                                >
                                    Blog
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="/contact">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "text-black text-[14px] font-manrope font-semibold"
                                            : "text-[#9497A1] text-[14px] font-manrope font-medium hover:text-black duration-300"
                                    }
                                >
                                    Contact
                                </span>
                            )}
                        </NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" sx={watchButtonSX} startIcon={<PlayCircleOutlineIcon />}>
                            Contained
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
