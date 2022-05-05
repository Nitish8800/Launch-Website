import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// import ButtonGroup from "@mui/material/ButtonGroup";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";

export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <a href="#Features">
          <ListItem button key="Features">
            <ListItemText primary="Features" />
          </ListItem>
        </a>
        <a href="#Review">
          <ListItem button key="Review">
            <ListItemText primary="Reviews" />
          </ListItem>
        </a>
        <a href="#Pricing">
          <ListItem button key="Pricing">
            <ListItemText primary="Pricing" />
          </ListItem>
        </a>
        <a href="#Team">
          <ListItem button key="Team">
            <ListItemText primary="Team" />
          </ListItem>
        </a>
        <a href="#Contact">
          <ListItem button key="Contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </a>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ transform: "scale(1.8)", color: "#f56363" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuOpenIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
