import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
import ProductLayout from "../../components/Layouts/Product.Layout";
import ProductDetail from "../../modules/Products/ProductDetail";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { IBack } from "../../modules/Products/icons";

export default class Detail extends React.Component {
  render() {
    return (
      <ProductLayout header={
        <Grid container direction="row" alignItems="center">
          <Link to="/">
            <IconButton>
              <IBack/>
            </IconButton>
          </Link>
          <Typography variant="h5" color="red">
            Back to products
          </Typography>
        </Grid>
      }>
        <ProductDetail/>
      </ProductLayout>
    );
  }
}
