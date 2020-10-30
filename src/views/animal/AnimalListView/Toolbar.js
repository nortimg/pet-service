import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  InputLabel,
  Card,
  Grid,
  CardContent,
  TextField,
  MenuItem,
  Slider,
  Typography,
  Select,
  Input,
  FormControl,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  filterInput: {
    width: '250px'
  },
  slider: {
    width: '250px'
  },
  sliderTitle: {
    position: 'relative',
    top: '10px'
  }
}));

// eslint-disable-next-line react/prop-types
const Toolbar = ({ className, setBreed, setPetPlace, setPetAge, setSearch, petAge, petPlace, petBreed, search}) => {
  const classes = useStyles();

  const changeAge = (event, newValue) => {
    setPetAge(newValue);
  };
  const changePlace = (event) => {
    setPetPlace(event.target.value);
  };
  const changeType = (event) => {
    setBreed(event.target.value);
  };

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardContent>
          <Grid container>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Поиск..."
              variant="outlined"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <Grid container direction="row" justify="space-between">
              <Grid container direction={'column'} className={classes.slider} >
                <Typography className={classes.sliderTitle}>Возраст</Typography>
                <Slider
                  value={petAge}
                  onChange={changeAge}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  max={40}
                />
              </Grid>
              <FormControl>
                <InputLabel id="place">Приют</InputLabel>
                <Select
                  labelId="place"
                  id="place-select"
                  value={petPlace}
                  onChange={changePlace}
                  input={<Input />}
                  className={classes.filterInput}
                >
                  {['Приют1', 'Приют2'].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="type">Порода</InputLabel>
                <Select
                  labelId="type"
                  id="type-select"
                  value={petBreed}
                  onChange={changeType}
                  input={<Input />}
                  className={classes.filterInput}
                >
                  {['Порода1', 'Порода2'].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
