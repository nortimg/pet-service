import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Grid,
  makeStyles, Button
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import ProductCard from '../../animal/AnimalListView/ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  contentPart: {
    padding: theme.spacing(2)
  }
}));

const Results = ({ className, orders, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = orders.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === orders.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < orders.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Имя
                </TableCell>
                <TableCell>
                  Почта
                </TableCell>
                <TableCell>
                  Адрес
                </TableCell>
                <TableCell>
                  Телефон
                </TableCell>
                <TableCell>
                  Питомец
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(0, limit).map((order) => (
                <TableRow
                  hover
                  key={order.id}
                  selected={selectedCustomerIds.indexOf(order.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(order.id) !== -1}
                      onChange={(event) => handleSelectOne(event, order.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={order.avatarUrl}
                      >
                        {getInitials(order.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {order.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {order.email}
                  </TableCell>
                  <TableCell>
                    {`${order.address.city}, ${order.address.state}, ${order.address.country}`}
                  </TableCell>
                  <TableCell>
                    {order.phone}
                  </TableCell>
                  <TableCell>
                    <ProductCard
                      product={order.animal}
                      height={300}
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
                            <Button
                              color="primary"
                              variant="contained"
                            >
                              Одобрить
                            </Button>
                          </Grid>
                          <Grid
                            className={classes.statsItem}
                            item
                          >
                            <Button className="red">Отказ</Button>
                          </Grid>
                        </Grid>
)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={orders.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired
};

export default Results;
