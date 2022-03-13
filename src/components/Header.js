import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          {/*Inside the IconButton, we 
          can render various icons*/}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*This is a simple Menu 
             Icon wrapped in Icon */}
            <MenuIcon />
          </IconButton>
          {/* The Typography component applies 
           default font weights and sizes */}
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Dude, Where's My Car?
          </Typography>
          <Link to="/signin"><Button color="inherit">Signin</Button></Link>
          <Link to="/signup"><Button color="inherit">Signup</Button></Link>
          <Link to="/carcontrol"><Button color="inherit">ListOfCars</Button></Link>
        </Toolbar>
      </AppBar>
  );
}
