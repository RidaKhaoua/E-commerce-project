// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import "./Main.css";
import { Close } from "@mui/icons-material";
import ProductsDetails from "../productDetails/ProductsDetails";
import { useGetproductByNameQuery } from "../../Redux/products";


export default function Main() {
  const allProducts = "products?populate=*";
  const productsMen = "products?populate=*&filters[productCategory][$eq]=men"
  const productsWomen = "products?populate=*&filters[productCategory][$eq]=women"

  const theme = useTheme();
    
  // State of Modal Open
  const [open, setOpen] = useState(false);

  // State of Filter Products
  const [filterProducts, setFilterProducts] = useState(allProducts)


  const { data, error, isLoading } = useGetproductByNameQuery(filterProducts);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleAlignment = (event, newAlignment) => {
   setFilterProducts(newAlignment)
  };

  const displayProducts = () => {
    if (data) {
      return data.data.map((product, index) => {
        const {
          id,
          attributes: {
            productTitle,
            productPrice,
            productDescription,
            ProductRating,
            productImg:{data},
          },
        } = product;
        return (
          <Card
            key={index}
            sx={{
              maxWidth: 320,
              ":hover .MuiCardMedia-root": {
                scale: "1.1",
                rotate: "1deg",
                transition: " 0.5s ease-in-out",
              },
            }}>
            <CardMedia
              sx={{ minHeight: 322 }}
              image={`${data[0].attributes.url}`} 
              title="green iguana"
            />
            <CardContent>
              <Stack
                mb={1}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Typography variant="h6">{productTitle}</Typography>
                <Typography variant="subtitle1">${productPrice}</Typography>
              </Stack>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                {productDescription}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                onClick={handleClickOpen}
                sx={{ textTransform: "capitalize" }}
                size="large">
                <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mx: 1 }} />
                Add to Cart
              </Button>
              <Button size="small">
                <Rating
                  name="read-only"
                  value={ProductRating}
                  size="small"
                  precision={0.1}
                  readOnly
                />
              </Button>
            </CardActions>
          </Card>
        );
      });
    } else {
      return error.message;
    }
  };

  return (
    <Container>
      {/* Start Filter by Categorie */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={2}>
        {/* Start Left Box */}
        <Box>
          <Typography variant="h6">Select Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in a exclusive brad selection
          </Typography>
        </Box>
        {/* End Left Box */}
        {/* Start ToggleButtonGroup */}
        <ToggleButtonGroup
          color="error"
          value={filterProducts}
          exclusive
          onChange={handleAlignment}
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5)",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
          aria-label="text alignment">
          {/* Start ToggleButton */}
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={allProducts}
            aria-label="left aligned">
            All products
          </ToggleButton>
          {/* End ToggleButton */}
          {/* Start ToggleButton */}
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value={productsMen}
            aria-label="centered">
            MEN category
          </ToggleButton>
          {/* End ToggleButton */}
          {/* Start ToggleButton */}
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={productsWomen}
            aria-label="right aligned">
            women category
          </ToggleButton>
          {/* End ToggleButton */}
        </ToggleButtonGroup>
        {/* End  ToggleButtonGroup */}
      </Stack>
      {/* End Filter by Categorie */}
      {/* Start Products */}
      <Stack
        mt={4}
        direction={"row"}
        flexWrap={"wrap"}
        gap={3}
        justifyContent={"center"}>
        {/* Start Card */}
        {data ? displayProducts() : <CircularProgress />}
        {/* End Card */}
      </Stack>
      {/* End Products */}

      {/* Start Dailog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: 820, overflow: "hidden" },
          },
        }}>
        {/* Start close button */}
        <IconButton
          onClick={handleClose}
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
        <ProductsDetails />
      </Dialog>
      {/* End Dialog */}
    </Container>
  );
}
