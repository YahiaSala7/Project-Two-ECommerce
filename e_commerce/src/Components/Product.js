import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import img from "../assets/imgs/vivibeni_girl_in_the_street_yao_jia_in_the_style_of_romantic_so_afedb9e0-4619-498f-bb10-3a5c8f98246e_upscayl_4x_realesrgan-x4plus.png";
function Product() {
  return (
    <Box width="400px">
      <Card>
        <CardMedia
          component="img"
          height="250px"
          image={img}
          alt="unsplash image"
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              fontSize="20px"
              fontWeight={600}>
              Product Name
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              fontSize="20px"
              fontWeight={600}>
              $Price
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            discribtion
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <IconButton>
            <AddShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Product;
