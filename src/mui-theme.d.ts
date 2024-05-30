import { PaletteColor } from '@mui/material';
import '@mui/material/styles';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    lightGrey: PaletteColor;
  }
  interface PaletteOptions {
    lightGrey: SimplePaletteColorOptions;
  }
}
