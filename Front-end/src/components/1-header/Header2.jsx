// @ts-nocheck
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import {  Search } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styled from "@emotion/styled";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { useState } from "react";
import { useTheme } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categorie", "Clothes", "Electronics"];

export default function Header2() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <header className="header2" style={{ padding: "20px 0"}}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          {/* Start Logo */}
          <Stack direction={"column"} alignItems={"center"}>
            <StoreIcon />
            <p style={{ fontWeight: 600 }}>shopiy</p>
          </Stack>
          {/* End Logo */}

          {/* Start Search input */}
          {useMediaQuery("(min-width:761px)") && (
            <Box
              sx={{
                display: "flex",
                minWidth: "550px",
                borderRadius: "50px",
                border: "1px solid #ddd",
                overflow: "hidden",
                transition: "border 0.5s linear",
                "&:hover": { borderColor: "#9f3c3c" },
              }}>
              <div
                className="search-input"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 10,
                  gap: 5,
                  flexGrow: 1,
                }}>
                {/* icon search */}
                <Search sx={{ color: "#777" }} />
                {/* input search */}
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                    padding: "6px 0",
                  }}
                />
              </div>

              {/* Menu Categorie */}
              <List
                component="nav"
                aria-label="Device settings"
                sx={{
                  p: 0,
                  m: 0,
                  bgcolor: theme.palette.myColor.main,
                  display: "flex",
                  alignItems: "center",
                }}>
                <ListItem
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                  sx={{ "&:hover": { cursor: "pointer" }, minWidth: 120 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "11px",
                        color: "#5B5E6B",
                      },
                    }}
                    secondary={options[selectedIndex]}
                  />
                  <KeyboardArrowDownIcon
                    sx={{ color: "#000", fontSize: "13px" }}
                  />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}>
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              {/* End menu Categorie */}
            </Box>
          )}
          {/* End Search input */}

          {/* Start icons */}
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            {/* Start Search icon */}
            {useMediaQuery("(max-width:761px)") && (
              <IconButton onClick={toggleDrawer("top", true)}>
                <Search />
              </IconButton>
            )}
            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              sx={{
                ".MuiDrawer-paperAnchorTop ": {
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  py:2,
                  position:"relative"
                },
              }}>
                <IconButton  onClick={toggleDrawer("top", false)} sx={{position:"absolute", right:10}}>
                  <CloseIcon />
                </IconButton>
              <Box
                style={{
                  display: "flex",
                  minWidth: "400px",
                  borderRadius: "50px",
                  border: "1px solid #ddd",
                  overflow: "hidden",
                  transition: "border 0.5s linear",
                  marginTop:"30px",
                  "&:hover": { borderColor: "#9f3c3c" },
                }}>
                <div
                  className="search-input"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                    gap: 5,
                    flexGrow: 1,
                  }}>
                  {/* icon search */}
                  <Search sx={{ color: "#777" }} />
                  {/* input search */}
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: "6px 0",
                    }}
                  />
                </div>
                {/* menu categorie */}
                <List
                  component="nav"
                  aria-label="Device settings"
                  sx={{
                    p: 0,
                    m: 0,
                    bgcolor: theme.palette.myColor.main,
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <ListItem
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                    sx={{ "&:hover": { cursor: "pointer" }, minWidth: 120 }}>
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "11px",
                          color: "#5B5E6B",
                        },
                      }}
                      secondary={options[selectedIndex]}
                    />
                    <KeyboardArrowDownIcon
                      sx={{ color: "#000", fontSize: "13px" }}
                    />
                  </ListItem>
                </List>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                  }}>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{
                        fontSize: "11px",
                        p: "3px 10px",
                        minHeight: "10px",
                      }}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Drawer>
            {/* End Search icon */}

            {/* Start icon shoping Bag */}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingBagIcon />
              </StyledBadge>
            </IconButton>
            {/* End icon shoping Bag */}

            {/* icon user */}
            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            {/* End icon user */}
          </Stack>
          {/* End icons */}
        </Stack>
      </Container>
    </header>
  );
}
