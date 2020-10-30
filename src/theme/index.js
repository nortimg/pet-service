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
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '16px',
        position: 'relative',
        width: 'auto',
        height: '48px',
        border: 'none',
        borderRadius: '28px',
        backgroundColor: '#fff',
        fontWeight: 600,
        letterSpacing: '0.05em',
        lineHeight: '24px',
        textTransform: 'capitalize',
        boxShadow: 'inherit',
        padding: '0 32px',
        '&.normal': {
          color: '#0549c1',
          border: '2px solid #0549c1'
        }
      }
    },
  },
  shadows,
  typography,
});

export default theme;
