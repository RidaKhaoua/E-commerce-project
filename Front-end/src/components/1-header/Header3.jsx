// @ts-nocheck
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material";
import { useState } from "react";
import { Close, ExpandMore } from "@mui/icons-material";
import Links from "./Links";

const linkAarray = [
  {
    mainLink: "Home",
    subLink: ["Link 1", "Link 2", "Link 3"],
  },
  {
    mainLink: "Mega menu",
    subLink: ["Link 1", "Link 2"],
  },
  {
    mainLink: "Full screen menu",
    subLink: ["Link 1", "Link 2", "Link 3", "Link 4"],
  },
  {
    mainLink: "Pages",
    subLink: ["Link 1"],
  },
  {
    mainLink: "User account",
    subLink: ["Link 1", "Link 2"],
  },
  {
    mainLink: "Vendor account",
    subLink: ["Link 1", "Link 2"],
  },
];

export default function Header3() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const displayLink = linkAarray.map((item, index) => {
    return (
      <Accordion elevation={0} key={index} sx={{ bgcolor: "initial", mt: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{item.mainLink}</Typography>
        </AccordionSummary>

        <List sx={{ py: 0, my: 0 }}>
          {item.subLink.map((item, index) => {
            return (
              <ListItem key={index} sx={{ py: 0, my: 0 }}>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Accordion>
    );
  });

  return (
    <header className="Header3">
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          {/* Start Categories */}
          <Box>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                bgcolor: theme.palette.myColor.main,
                p: "10px 10px",
                width: 222,
                color: theme.palette.text.secondary,
              }}>
              <WindowIcon />
              <Typography
                sx={{
                  p: 0,
                  textTransform: "capitalize",
                  m: "0 10px",
                  flexGrow: 1,
                }}>
                categories
              </Typography>
              <KeyboardArrowRightIcon />
            </Button>
            <Menu
              sx={{
                ".MuiPaper-root": {
                  width: 220,
                  bgcolor: theme.palette.myColor.main,
                },
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem>
                <ListItemIcon>
                  <ComputerIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Electronics</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <MenuBookIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Books</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SportsEsportsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Games</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
          {/* End Categories */}
          {/* Start Links */}
          {useMediaQuery("(min-width:1200px)") && (
            <Box sx={{display:"flex", gap:3}}>
            <Links title={"Home"}/>
            <Links title={"Mega menu"}/>
            <Links title={"Full screen Menu"}/>
            <Links title={"pages"}/>
            <Links title={"User Account"}/>
            <Links title={"Vendor Account"}/>
          </Box>
          )}
          {/* End Links */}
          {/* Start Menu button */}
          {useMediaQuery("(max-width:1200px)") && (
            <IconButton onClick={toggleDrawer("top", true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{ ".MuiPaper-root": { minHeight: "100%" } }}>
            <Box
              sx={{
                width: 400,
                mx: "auto",
                mt: 10,
                pt: 10,
                position: "relative",
              }}>
              {/* Start close button */}
              <IconButton
                onClick={toggleDrawer("top", false)}
                sx={{
                  ":hover": { rotate: "90deg", color: "red" },
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transition: "0.3s linear",
                }}>
                <Close />
              </IconButton>
              {/* End Close button */}

              {/* Start Accordion */}
              {displayLink}
              {/* End Accordion */}
            </Box>
          </Drawer>
          {/* End Menu button */}
        </Stack>
      </Container>
    </header>
  );
}
