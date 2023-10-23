import React from "react";
import { Grid, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FormControl, Select, InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

const Header = () => {
  const isLogin = false;
  return (
    <Grid container gap={10} p={2}>
      <Grid item md={1}>
        <Link to="/">
          <IconButton>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="img"
              width={120}
            />
          </IconButton>
        </Link>
      </Grid>
      <Grid item md={1}>
        <div>
          <FormControl>
            <InputLabel>select category</InputLabel>
            <Select>
              <MenuItem value="category1">Option 1</MenuItem>
              <MenuItem value="category2">Option 2</MenuItem>
              <MenuItem value="category3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <p>select category</p>
        </div>
      </Grid>
      <Grid item md={3}>
        <TextField
          label="Search"
          variant="outlined"
          placeholder="search courses"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Grid>
      <Grid item md={4}>
        <Stack direction={"row"} spacing={3} justifyContent={"end"}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>

          {isLogin ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment>
              <Button variant="outlined">Login</Button>
              <Button variant="outlined">sign up</Button>
            </React.Fragment>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
