/* eslint-disable react/prop-types */
import { KeyboardArrowDown, KeyboardArrowRight,  } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";




export default function Links({title}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        py: 2,
        ":hover .show-when-hover": { display: "block" },
      }}>
      <Typography sx={{fontSize:"14px"}} >{title}</Typography>
      <KeyboardArrowDown />
      <Box className="show-when-hover"
        sx={{
          display: "none",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: 180,
          zIndex:20
        }}>
      <Paper sx={{mt:2}}>
        <nav>
          <List>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton sx={{":hover": {color:"red"}}}>
                <ListItemText
                className="list-item-Text"
                  sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                  primary="Daschoard"
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              sx={{
                p: 0,
                position: "relative",
                ":hover .sub-link": { display: "block" },
              }}>
              <ListItemButton sx={{":hover": {color:"red"}}}>
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                  primary="Products"
                />
                <KeyboardArrowRight />
              </ListItemButton>
              {/* Start Sublink */}
              <Box
                className="sub-link"
                sx={{
                  position: "absolute",
                  right: "100%",
                  top: "0",
                  display: "none",
                }}>
                <Paper sx={{ mr: 1, minWidth:150 }}>
                  <nav>
                    <List>
                      <ListItem sx={{ p: 0 }}>
                        <ListItemButton sx={{":hover": {color:"red"}}}>
                          <ListItemText sx={{ ".MuiTypography-root": { fontSize: "14px" } }}>Products</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Paper>
              </Box>
              {/* End Sublink */}
            </ListItem>

            <ListItem sx={{ p: 0, position: "relative" }}>
              <ListItemButton sx={{":hover": {color:"red"}}}>
                <ListItemText
                  sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                  primary="Products"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>
      </Box>
     
    </Box>
  );
}
