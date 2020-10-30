import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import AnimalDetails from './AnimalDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    width: '90%',
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddAnimal = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Добавить животное"
    >
      <Profile />
      <AnimalDetails />
    </Page>
  );
};

export default AddAnimal;
