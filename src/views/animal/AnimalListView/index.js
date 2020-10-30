import React, { useEffect, useState } from 'react';
import {
  Box, Button, Card,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import * as _ from 'lodash';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  contentPart: {
    padding: theme.spacing(2)
  }
}));

const filterByParamenter = (objArr, word, parameter) => {
  return _.filter(objArr, (obj) => {
    return obj[parameter].indexOf(word) !== -1;
  });
};

const filterByAge = (objArr, range) => {
  return _.filter(objArr, (obj) => {
    return (range[0] <= obj.age && obj.age <= range[1]);
  });
};

const AnimalList = () => {
  const classes = useStyles();
  const [petBreed, setBreed] = useState('');
  const [petPlace, setPetPlace] = useState('');
  const [petAge, setPetAge] = useState([0, 40]);
  const [search, setSearch] = useState('');
  const [pets, setPets] = useState(data);

  useEffect(() => {
    if (search !== '') {
      setPets(filterByParamenter(data, search, 'name'));
    } else {
      setPets(data);
    }
  }, [search]);

  useEffect(() => {
    if (petBreed !== '') {
      setPets(filterByParamenter(data, petBreed, 'breed'));
    } else {
      setPets(pets);
    }
  }, [petBreed]);

  useEffect(() => {
    if (petPlace !== '') {
      setPets(filterByParamenter(data, petPlace, 'shelter'));
    } else {
      setPets(pets);
    }
  }, [petPlace]);

  useEffect(() => {
    if (petAge !== '') {
      setPets(filterByAge(data, petAge));
    } else {
      setPets(pets);
    }
  }, [petAge]);

  return (
    <Page
      className={classes.root}
      title="Животные"
    >
      <Container maxWidth={false}>
        <Toolbar
          petBreed={petBreed}
          petPlace={petPlace}
          petAge={petAge}
          setBreed={setBreed}
          setPetPlace={setPetPlace}
          setPetAge={setPetAge}
          search={search}
          setSearch={setSearch}
        />
        <Grid
          container
          spacing={3}
        >
          {pets.map((product) => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard
                className={classes.productCard}
                product={product}
                height={180}
                actions={(
                  <Grid
                    container
                    justify="space-between"
                    spacing={2}
                    className={classes.contentPart}
                  >
                    <Grid
                      className={classes.statsItem}
                      item
                    >
                      <Button className="normal">Взять себе</Button>
                    </Grid>
                    <Grid
                      className={classes.statsItem}
                      item
                    >
                      <Button className="normal">Посмотреть</Button>
                    </Grid>
                    <Grid
                      className={classes.statsItem}
                      item
                    >
                      <Button className="normal">Онлайн показ</Button>
                    </Grid>
                  </Grid>
)}
              />
            </Grid>
          ))}
        </Grid>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default AnimalList;
