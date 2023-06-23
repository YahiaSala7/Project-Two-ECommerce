import { Box, Grid } from "@mui/material";
import React from "react";
import Product from "./Product";

function Products() {
  return (
    <Box p="50px">
      <Grid
        container
        justifyContent="center"
        gap="30px"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </Box>
  );
}

export default Products;
