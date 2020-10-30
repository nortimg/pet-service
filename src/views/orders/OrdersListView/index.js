import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import * as _ from 'lodash';

const filterByParamenter = (objArr, word, parameter) => {
  return _.filter(objArr, (obj) => {
    return obj[parameter].indexOf(word) !== -1;
  });
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const OrderListView = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState(data);

  useEffect(() => {
    if (search !== '') {
      setOrders(filterByParamenter(data, search, 'name'));
    } else {
      setOrders(data);
    }
  }, [search]);

  return (
    <Page
      className={classes.root}
      title="Заявки"
    >
      <Container maxWidth={false}>
        <Toolbar search={search} setSearch={setSearch} />
        <Box mt={3}>
          <Results orders={orders} />
        </Box>
      </Container>
    </Page>
  );
};

export default OrderListView;
