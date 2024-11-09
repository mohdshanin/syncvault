'use client';
import React from 'react';
import { Box } from '@mui/material';
import HeaderOFHomeSection from '@/assets/HeaderOFHomeSection';
import MediaCard from '@/assets/MediaCard';

export default function CardsSection() {
    const title = 'Participate And Earn Rewards';
    const description = 'Join challenges, follow the rules, and earn cash prizes along with $SVT Tokens.';
    const buttonText = 'View All Challenges';
    return (<Box sx={{ pl: 5 }}>
        <HeaderOFHomeSection title={title} Description={description} buttonText={buttonText} />
        <Box sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center', mr: 5 }}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </Box>
    </Box>
    );
}
