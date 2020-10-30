import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: '#f3f5f7',
    borderRadius: '4px'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  contentPart: {
    padding: theme.spacing(2)
  },
  additionalInfo: {
    marginBottom: theme.spacing(2)
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardMedia
        component="img"
        alt="Пёсик"
        height="140"
        image={product.image}
        title="Пёсик"
      />
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.name}
        </Typography>
        <Grid className={classes.additionalInfo} container direction="row" justify="space-between">
          <Typography><b>Порода:</b> {product.breed}</Typography>
          <Typography><b>Приют:</b> {product.shelter}</Typography>
          <Typography><b>Возраст:</b> {product.age}</Typography>
          <Typography><b>Пол:</b> {product.gender}</Typography>
        </Grid>
        <Typography
          align="left"
          color="textPrimary"
          gutterBottom
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
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
          <Button className="normal">Онлайн показ</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
