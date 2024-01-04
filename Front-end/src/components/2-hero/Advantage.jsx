/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// @ts-nocheck
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";

export default function Advantage() {
  const theme = useTheme();
  return (
    <div className="advantage">
      <Container>
        <Stack
          divider={
            useMediaQuery("(min-width:600px)") ? (
              <Divider orientation="vertical" flexItem />
            ) : null
          }
          sx={{
            bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
            borderRadius: "10px",
            mb:7
          }}
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={2}>
          <MyBox
            icon={<ElectricBoltIcon />}
            title={"Start Delivery"}
            subTitle={"Start form $10"}
          />
          <MyBox
            icon={<CreditScoreIcon />}
            title={"Money Guarantee"}
            subTitle={"7 Days Back"}
          />
          <MyBox
            icon={<WorkspacePremiumIcon />}
            title={"365 Days"}
            subTitle={"For free return"}
          />
          <MyBox
            icon={<AccessAlarmsIcon />}
            title={"Payment"}
            subTitle={"Secure System"}
          />
        </Stack>
      </Container>
    </div>
  );
}

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: 200,
        flexGrow: 1,
        gap: 2,
        color: theme.palette.text.secondary,
        justifyContent: { xs: "flex-start", sm: "center" },
        alignItems: "center",
        flexWrap: "wrap",
        padding: "15px",
      }}>
      {icon}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.therd }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "13px", color: theme.palette.text.secondary }}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
