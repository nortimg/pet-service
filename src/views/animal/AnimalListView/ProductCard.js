import React, { useState } from 'react';
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
import PetPreview from 'src/components/PetPreview';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)
  const call = () => console.log('call')


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
          <PetPreview open={isDialogOpen} handleClose={closeDialog} call={call} />
          <Button className="normal" onClick={openDialog}>Онлайн показ</Button>
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
