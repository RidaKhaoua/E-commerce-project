/* eslint-disable no-unused-vars */
// @ts-nocheck
import "./Header.css"
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const options = ["AR", "EN"];
export default function Header1() {
  const [showRightBox, setShowRightBox] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

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

  const handleShow = () => {
    setShowRightBox(!showRightBox);
  }
  return (
    <header className="Header1" style={{ backgroundColor: "#283445" }}>
      <Container >
        <Stack
          className="stack-content"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          >
          {/* Start left Box */}
          <Box sx={{ display: "flex", justifyContent:"space-between", width:"100%" }}>
            <Box sx={{display:"flex"}}>
            <Typography
              sx={{
                mr: 2,
                p: "3px 18px",
                bgcolor: "#D23F57",
                borderRadius: "12px",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#fff",
              }}
              variant="body2">
              HOT
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 300,
                color: "#fff",
              }}
              variant="body2">
              Free Express Shipping
            </Typography>
            </Box>
            <AddOutlinedIcon onClick= {handleShow} className="addoutlined-icon" sx={{cursor:"pointer", fontSize:16, color:"white"}}/>
          </Box>
          {/* End left Box */}
      
          {/* Start right Box */}
          <Box className={showRightBox ? "right-box show" : "right-box"} sx={{ display: "flex", alignItems: "center" }}>
            {/* Start Icon dark mode */}
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "light" ? "dark" : "light"
                    );
                    colorMode.toggleColorMode();
                  }}
                  style={{ color: "white" }}>
                  <LightModeOutlined sx={{fontSize:"16px"}}/>
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="white">
                  <DarkModeOutlined sx={{fontSize:"16px"}} />
                </IconButton>
              )}
            </div>
            {/* End Icon dark mode*/}
      
            {/* Start Select */}
            <List component="nav" aria-label="Device settings" sx={{p:0, m:0}}>
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{"&:hover":{cursor:"pointer"}}}
                >
                <ListItemText
                  sx={{ ".MuiTypography-root": {fontSize:"11px", color: "#fff" } }}
                  secondary={options[selectedIndex]}
                />
                <KeyboardArrowDownIcon sx={{ color: "white", fontSize:"13px" }} />
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
            {/* End Select */}
      
            {/* Start Icons */}
            <div className="icons">
              <FacebookIcon  sx={{cursor:"pointer", fontSize:16}} />
              <TwitterIcon  sx={{cursor:"pointer", fontSize:16}}/>
              <InstagramIcon  sx={{cursor:"pointer", fontSize:16}}/>
            </div>
            {/* End Icons */}
          </Box>
          {/* End right Box */}
        </Stack>
      </Container>
    </header>
  );
}
