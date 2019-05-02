import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Giphy Image Search
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;