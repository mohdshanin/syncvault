'use client';
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import styles from './page.module.css'

import { useThemeContext } from '../utils/ThemeRegistry';
import { SwitchWithIcons } from './assets/SwitchWithIcon'

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const theme = useTheme();
  const { toggleTheme, activeTheme } = useThemeContext();

  return (
    <Box
      className={styles.container}
    >

      <Typography
        variant="subtitle2"
        fontWeight={400}
      >
        With default Theme:
      </Typography>
      <Box>Home Page</Box>
      <Button
        sx={{ backgroundColor: 'white.main' }}
        variant="contained"
        onClick={toggleTheme}
      >
        Switch to {activeTheme ? 'Light' : 'Dark'} Theme
      </Button>
      <Button
        variant="contained"
        color='primary'
      >
        primary Button
      </Button>
      <Button
        variant="contained"
        color='secondary'
      >
        secondary Button
      </Button>
      <Button
        variant="contained"
        color='success'
      >
        success Button
      </Button>
      <Button
        variant="contained"
        color='error'
      >
        error Button
      </Button>
      <Button
        variant="contained"
        color='info'
      >
        info Button
      </Button>
      <Button
        variant="contained"
        color='warning'
      >
        warning Button
      </Button>
      <SwitchWithIcons {...label}
        checked={activeTheme}
        onChange={toggleTheme}
      />
      <Link component={NextLink} href="/my-wallet">To My Wallet Page</Link>
    </Box>

  );
}