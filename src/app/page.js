'use client';
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import styles from './page.module.css'

import NoticeBanner from '../components/NoticeBanner';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';

import { useThemeContext } from '../utils/ThemeRegistry';
import { SwitchWithIcons } from '../assets/SwitchWithIcon'
import CardsSection from '@/components/CardsSection';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const theme = useTheme();
  const { toggleTheme, activeTheme } = useThemeContext();

  return (
    <Box>
      <NoticeBanner />
      <HeroSection />
      <StatsSection />
      <CardsSection />
      <HeroSection rightTextContainer />
    </Box>

  );
}