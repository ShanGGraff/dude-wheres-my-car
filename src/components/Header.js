import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Dude, Where's My Car?
          </Typography>
          <Link to="/signin"><Button color="inherit">Signin</Button></Link>
          <Link to="/signup"><Button color="inherit">Signup</Button></Link>
          <Link to="/signin"><Button color="inherit">Signout</Button></Link>
          <Link to="/carcontrol"><Button color="inherit">ListOfCars</Button></Link>
        </Toolbar>
      </AppBar>
  );
}
