import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/icons/commerce.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center">
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px", marginRight: "7px" }}
            />
          </NavLink>
          <NavLink to={"/"}>
            <Typography variant="h6" component="div">
              E-Commerce
            </Typography>
          </NavLink>
        </Stack>
        <NavLink to={"/cart"}>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
