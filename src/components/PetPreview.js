import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function PetPreview(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle >
          Посмотреть животное онлайн
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.call} color="primary" variant="contained">
            Позвонить
          </Button>
          <Button onClick={props.handleClose} color="default" autoFocus variant="contained">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
  )
}