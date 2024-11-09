'use client';
import Box from "@mui/material/Box";

import NoticeBanner from '../components/NoticeBanner';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';

import CardsSection from '@/components/CardsSection';
import StakingPoolsSection from '@/components/StakingPoolsSection';

export default function Home() {

  return (
    <Box>
      <NoticeBanner />
      <HeroSection />
      <StatsSection />
      <CardsSection />
      <HeroSection rightTextContainer />
      <StakingPoolsSection />
    </Box>
  );
}