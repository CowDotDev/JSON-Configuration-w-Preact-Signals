import { ThemeOptions } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type TLinkPropsMap = Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] };
const LinkBehavior = forwardRef<HTMLAnchorElement, TLinkPropsMap>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

enum Colors {
  background = '#f3f3f3',
  white = '#ffffff',
  lightGrey = '#d8e0e5',
  black = '#000000',
  primary = '#3882cc',
  secondary = '#cc8238',
  error = '#cc3882',
  warning = '#dbb952',
  info = '#3838cc',
  success = '#38cccc',
}

export const THEME_SPACING_BASE = 4;

export const themeOptions: ThemeOptions = {
  spacing: THEME_SPACING_BASE,
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.background,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
    info: {
      main: Colors.info,
    },
    success: {
      main: Colors.success,
    },
    lightGrey: {
      main: Colors.lightGrey,
    }
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: THEME_SPACING_BASE * 2,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
