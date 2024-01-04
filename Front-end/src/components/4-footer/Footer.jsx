import { Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "10px 0",
        textAlign: "center",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#2B3445",
      }}>
      <Typography variant="body1" color={"HighlightText"} sx={{fontSize:18}}>
        Designed and developed by <Button sx={{color:"#ff7790", fontSize:"18px", mx:0.5}}>Rida Khaoua</Button> &copy; 2023
      </Typography>
    </footer>
  );
}
