import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';
import { IStart } from './icons';
import { ProductStore } from './Product.Store';
import { getParameterByName } from '../../utils/hooks';
import { ProductDto } from './Product.Dto';
// ReactSlideShow Fade
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const {formatMoney} = require('accounting-js');

interface State {
  product: ProductDto | null
}

@observer
export default class ProductDetail extends Component<{}, State> {
  @resolve(ProductStore)
  private readonly productStore!: ProductStore;

  id = getParameterByName('id')

  constructor() {
    super({});
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    if (this.id) this.productStore.getOne(this.id).then((product) => {
      this.setState({ product })
    });
  }

  render() {
    return (
      <Grid container gap={6} mt={4}>
        <Grid item md={7}>
          <div className="slide-container">
            <Fade>
              {this.state.product?.images.map((url) => (
                <div className="each-fade" key={url}>
                  <div className="image-container">
                    <img width="100%" height={422} src={url} alt="images " />
                  </div>
                </div>
              ))}
            </Fade>
          </div>
          <Typography variant='h6' mt={2}>
            Description
          </Typography>
          <Typography variant='body2' mt={2}>
            {this.state.product?.description}
          </Typography>
        </Grid>
        <Grid item md={4.4}>
          <Typography variant='h5'>
            {this.state.product?.title}
          </Typography>
          <Grid container direction="row" gap={1}>
            <IStart />
            {this.state.product?.rating}
          </Grid>
          <Typography variant="h4" mt={2}>
            {formatMoney(this.state.product?.price,'$',1)}
          </Typography>
          <Grid container direction="row" gap={1} mt={3}>
            <Typography variant="body2">
              Category :
            </Typography>
            <Typography>
              {this.state.product?.category}
            </Typography>
          </Grid>
          <Grid container direction="row" gap={1} mt={2}>
            <Typography variant="body2">
              Brand :
            </Typography>
            <Typography>
              {this.state.product?.brand}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
