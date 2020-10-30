import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextareaAutosize,
  InputBase,
  Grid,
  Typography,
  Select,
  TextField,
  makeStyles, Input, MenuItem, InputLabel, FormControl
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  filterInput: {
    width: '100%'
  },
}));

const AnimalDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [animal, setAnimal] = useState({
    name: '',
    breed: '',
    status: '',
    shelter: '',
    gender: '',
    image: '',
    age: '',
    size: '',
    weight: '',
    description: ''
  });

  const handleChange = (event) => {
    setAnimal({
      ...animal,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Введите информацию о питомце без хозяина"
          title="Питомец"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Кличка"
                name="name"
                onChange={handleChange}
                required
                value={animal.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Порода"
                name="gender"
                onChange={(handleChange)}
                required
                value={animal.gender}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FormControl className={classes.filterInput}>
                <InputLabel id="place">Пол</InputLabel>
                <Select
                  labelId="breed"
                  name={'breed'}
                  id="breed-select"
                  value={animal.breed}
                  onChange={handleChange}
                  input={<Input />}
                  className={classes.filterInput}
                >
                  {['Самец', 'Самка'].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FormControl className={classes.filterInput}>
                <InputLabel id="place">Приют</InputLabel>
                <Select
                  labelId="place"
                  name={'shelter'}
                  id="place-select"
                  value={animal.shelter}
                  onChange={handleChange}
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
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FormControl className={classes.filterInput}>
                <InputLabel id="place">Статус</InputLabel>
                <Select
                  labelId="status"
                  name="status"
                  id="place-select"
                  value={animal.status}
                  onChange={handleChange}
                  input={<Input />}
                  className={classes.filterInput}
                >
                  {['Не отдали', 'Отдали'].map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Вес"
                name="weight"
                onChange={(handleChange)}
                type="number"
                required
                value={animal.weight}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Возраст"
                name="age"
                onChange={(handleChange)}
                type="number"
                required
                value={animal.age}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Размер"
                name="size"
                onChange={(handleChange)}
                type="number"
                required
                value={animal.size}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Typography variant="body2">Описание:</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={8}
                className={classes.filterInput}
                label="Порода"
                name="description"
                onChange={handleChange}
                required
                value={animal.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Сохранить
          </Button>
        </Box>
      </Card>
    </form>
  );
};

AnimalDetails.propTypes = {
  className: PropTypes.string
};

export default AnimalDetails;
