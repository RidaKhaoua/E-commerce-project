/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

import { useTheme } from "@mui/material";

// import required modules
import { Pagination } from "swiper/modules";

const mySlider = [
  { text: "MEN", linkImage: "images/banner-15.jpg" },
  { text: "WOMEN", linkImage: "images/banner-25.jpg" },
];

export default function Hero() {
 
  const theme = useTheme();
  const displayDataSlider = mySlider.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <Box sx={{ flexGrow: 1, position: "relative", zIndex: -1 }}>
          {useMediaQuery("(min-width:600px)") && (
            <img
              src={item.linkImage}
              alt=""
              style={{ borderRadius: 10 }}
              //   width={"100%"}
            />
          )}

          {/* Start Content */}
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                textAlign: "left",
              },
              [theme.breakpoints.down("sm")]: {
                pt: 4,
                pb: 6,
              },
            }}>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontWeight: 600, mb: 1 }}>
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000",
                fontWeight: 700,
                fontSize: "30px",
                mb: 1,
              }}>
              {item.text}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontWeight: 600, fontSize: "26px" }}>
              SALE UP TO <span style={{ color: "#C75862" }}>30% OFF</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: "15px", color: "#AFA8A0" }}>
              Get Free Shoping on orders over $99.00
            </Typography>
            <Button
              sx={{
                mt: 2,
                bgcolor: "#000",
                "&:hover": { bgcolor: "#151515" },
              }}
              variant="contained">
              Shop Now
            </Button>
          </Box>
          {/* End Content */}
        </Box>
      </SwiperSlide>
    );
  });

  return (
    <div className="hero" style={{ margin: "30px 0" }}>
      <Container>
        <Stack
          sx={{ py: 2 }}
          direction={"row"}
          justifyContent={"space-between"}
          gap={2}>
          {/* Start Left Box*/}
          <Swiper
          loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            {displayDataSlider}
          </Swiper>

          {/* End Left Box */}

          {/* Start Right Box */}
          <Box sx={{ display: { xs: "none", md: "block", width: "36%" } }}>
            {/* Start top box */}
            <Box sx={{ position: "relative", mb: 1,  }}>
              <img
                src="/images/banner-17.jpg"
                alt=""
                style={{ borderRadius: 10, width: "100%" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "15px",
                  transform: "translateY(-50%)",
                }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#2B3445", fontSize: "18px" }}>
                  NEW ARRIVALS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#2B3445", fontSize: "18px", fontWeight: 600 }}>
                  SUMMER
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#2B3445", fontSize: "18px", fontWeight: 600 }}>
                  SALE 20% OFF
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: "13px",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#2B3445",
                    transition: "0.5s linear",
                    ":hover": { color: "red" },
                  }}>
                  shop now <ArrowRightAltIcon />{" "}
                </Link>
              </Box>
            </Box>
            {/* End top box */}

            {/* Start Bottom box */}
            <Box sx={{ position: "relative", }}>
              <img
                src="/images/banner-16.jpg"
                alt=""
                style={{ borderRadius: 10, width: "100%" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "15px",
                  transform: "translateY(-50%)",
                }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#2B3445", fontSize: "18px" }}>
                  GAMING 4K
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#2B3445", fontSize: "18px", fontWeight: 600 }}>
                  DESKTOPS & <br /> LAPTOPS
                </Typography>

                <Link
                  underline="none"
                  sx={{
                    fontSize: "13px",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#2B3445",
                    transition: "0.5s linear",
                    ":hover": { color: "red" },
                  }}>
                  shop now <ArrowRightAltIcon />{" "}
                </Link>
              </Box>
            </Box>
            {/* End Bottom box */}
          </Box>

          {/* End Right Box */}
        </Stack>
      </Container>
    
    </div>
  );
}
