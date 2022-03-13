import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
  
export default function Footer() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Add more resources here
          </Typography>
          <Link to="/"><Button color="inherit">Home</Button></Link>
        </Toolbar>
      </AppBar>
  );
}