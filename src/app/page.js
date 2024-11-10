'use client';
import Box from "@mui/material/Box";

import InformationBanner from '../assets/InformationBanner';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CardsSection from '@/components/CardsSection';
import StakingPoolsSection from '@/components/StakingPoolsSection';
import QuestSection from '@/components/QuestSection';
import VotingPoolsSection from '@/components/VotingPoolsSection';


export default function Home() {

  return (
    <Box>
      <InformationBanner title={'$5,000 Syncvault Esports Tournament Live. To participate in the tournament'}
        path={'/my-participations'}
        typeNotice
      />
      <HeroSection />
      <StatsSection />
      <CardsSection />
      <HeroSection rightTextContainer />
      <StakingPoolsSection />
      <QuestSection />
      <VotingPoolsSection />
    </Box>
  );
}