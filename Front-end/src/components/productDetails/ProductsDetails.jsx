/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";


export default function ProductsDetails() {
  return (
    <>
    {/* Start show Product */}
    <Card sx={{ display: "flex", flexDirection:{xs:"column", sm:"row"}, alignItems:{xs:"center"} }}>
     <CardMedia
       component="img"
       sx={{ width: {xs:190, sm:300}, padding:1, borderRadius:"10px" }}
       image="/images/t-shirts/1.jpg"
       alt=""
     />
     <Box>
       <CardContent sx={{ flex: "1 0 auto" }}>
         <Typography component="div" variant="h5" fontWeight={600}>
           WOMEN'S FASCHION
         </Typography>
         <Typography
           variant="subtitle1"
           color="red"
           component="div"
           fontWeight={600}>
           $12.99
         </Typography>
         <Typography variant="subtitle1" color="#777" component="div">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
           ipsum modi amet nemo natus magni eaque non odit cupiditate
           totam, provident aliquid delectus qui ipsam. Qui corrupti
           exercitationem in perspiciatis?
         </Typography>
         {/* Start More Images */}
         <Stack direction={"row"} gap={2} mt={2} mb={2}>
           <CardMedia
             component="img"
             sx={{
               width: 80,
               border: "1px solid #eee",
               padding: "5px",
               cursor: "pointer",
             }}
             image="/images/t-shirts/1.jpg"
             alt=""
           />
           <CardMedia
             component="img"
             sx={{
               width: 80,
               border: "1px solid #eee",
               padding: "5px",
               cursor: "pointer",
             }}
             image="/images/t-shirts/2.jpg"
             alt=""
           />
         </Stack>
         {/* End More Images */}
         <Button variant="contained">
           <AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize="small"/>
           Buy Now
           </Button>
       </CardContent>
     </Box>
   </Card>
   {/* End show Product */}
    </>
     
  )
}
