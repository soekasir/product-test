import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // InputAdornment,
  // IconButton,
} from "@mui/material";
import { resolve } from "inversify-react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { CategoryStore } from "./Category.Store";
import { ProductStore } from "./Product.Store";
// import SearchIcon from "@mui/icons-material/Search";

@observer
export default class ProductGridHeader extends Component {
  @resolve(ProductStore)
  private readonly productStore!: ProductStore;
  @resolve(CategoryStore)
  private readonly categoryStore!: CategoryStore;

  state = {
    category: "",
    search: "",
  };

  componentDidMount() {
    this.categoryStore.init();
  }

  onChangeCategory = (category: string) => {
    if (category !== this.state.category) {
      this.setState({ category, search: "" });
      this.productStore.getByCategory(category);
    }
  };

  onClickSearch = () => {
    this.productStore.search(this.state.search);
  };

  render() {
    return (
      <Grid container gap={2}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            minWidth: 120,
            "& .MuiInputBase-root": {
              backgroundColor: "white",
              borderRadius: "4px",
              paddingRight: 0,
            },
          }}
          // InputProps={{
          //   endAdornment:  <InputAdornment position="start">
          //     <IconButton
          //       onClick={this.onClickSearch}
          //     >
          //       <SearchIcon/>
          //     </IconButton>
          //   </InputAdornment>,
          // }}
          onChange={(e) => {
            this.setState({ search: e.target.value, category: "" });
          }}
          value={this.state.search}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              this.onClickSearch();
            }
          }}
        />
        <FormControl
          sx={{
            minWidth: 120,
            "& .MuiInputBase-input": {
              backgroundColor: "white",
              borderRadius: "4px",
            },
          }}
          size="small"
        >
          <InputLabel id="demo-select-small">Category</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Age"
            onChange={(e) => {
              this.onChangeCategory(e.target.value as string);
            }}
            value={this.state.category}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {this.categoryStore.categories.map((category) => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }
}
