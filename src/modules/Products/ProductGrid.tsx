import { Grid, Paper, Typography } from "@mui/material";
import { resolve } from "inversify-react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { IStart } from "./icons";
import { ProductStore } from "./Product.Store";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
const { formatMoney } = require("accounting-js");

@observer
export default class ProductGrid extends Component {
  @resolve(ProductStore)
  private readonly productStore!: ProductStore;

  componentDidMount() {
    this.productStore.init();
  }

  render() {
    return (
      <Grid container gap={4}>
        {this.productStore.products.map((product) => (
          <Grid item md={2.7}>
            <Paper style={{ position: "relative", height: "320px" }}>
              <Grid>
                <img
                  height="160px"
                  width="100%"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </Grid>
              <Grid padding="8px 20px 20px 20px">
                <Typography
                  variant="subtitle1"
                  maxWidth={270}
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" overflow="hidden">
                  {product.description}
                </Typography>
                <Grid container direction="row" mt={1} gap={0.5}>
                  <IStart />
                  {product.rating}
                  <Divider orientation="vertical" flexItem />
                  {formatMoney(product.price, "$", 0)}
                </Grid>
              </Grid>
              <Grid
                style={{
                  position: "absolute",
                  bottom: "14px",
                  width: "100%",
                  display: "flex",
                  height: "28px",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={"detail?id=" + product.id}
                  style={{ textDecoration: "none" }}
                >
                  <Grid
                    style={{
                      backgroundColor: "#FA0000",
                      width: "162px",
                      height: "27px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Details
                  </Grid>
                </Link>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
}
