'use client';
import React from 'react';
import { Box } from '@mui/material';

import HeaderOFHomeSection from '../assets/HeaderOFHomeSection';
import MediaCard from '../assets/MediaCard';

export default function CardsSection() {
    const title = 'Participate And Earn Rewards';
    const description = 'Join challenges, follow the rules, and earn cash prizes along with $SVT Tokens.';
    const buttonText = 'View All Challenges';
    return (<Box sx={{ mb: 15 }}>
        <HeaderOFHomeSection title={title} description={description} buttonText={buttonText} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
