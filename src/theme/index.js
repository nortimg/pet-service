import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      // main: colors.indigo[500]
      main: '#0549c1'
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      // primary: colors.blueGrey[900],
      // secondary: colors.blueGrey[600]
      primary: '#0c1014',
      secondary: '#0c1014',
      active: colors.common.white
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '16px',
        position: 'relative',
        minWidth: '200px',
        height: '48px',
        border: 'none',
        borderRadius: '28px',
        backgroundColor: '#fff',
        fontWeight: 600,
        letterSpacing: '0.05em',
        lineHeight: '24px',
        textTransform: 'none',
        padding: '0 15px !important',
        boxShadow: 'inherit',
        '&.normal': {
          color: '#0549c1',
          border: '2px solid #0549c1'
        },
        '&.red': {
          background: '#e7372c',
          color: '#fff'
        }
      }
    },
  },
  shadows,
  typography,
});

export default theme;
