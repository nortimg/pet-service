import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  InputLabel,
  Card,
  Grid,
  CardContent,
  TextField,
  MenuItem,
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
    width: '200px'
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [petName, setPetName] = useState([]);

  const handleChange = (event) => {
    setPetName(event.target.value);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
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
              />
              <FormControl>
                <InputLabel id="demo-mutiple-name-label">Возраст</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  value={petName}
                  onChange={handleChange}
                  input={<Input />}
                  className={classes.filterInput}
                >
                  {['Молодой', 'Пожилой'].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
