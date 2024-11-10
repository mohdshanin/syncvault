'use client';
import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { spaceGrotesk } from "../utils/fonts";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { PresentationChartBarIcon } from '@heroicons/react/24/outline';
import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { FireIcon } from '@heroicons/react/24/outline';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';


export default function uniqueToolsSection({ rightTextContainer = false }) {

    const uniqueTools = [
        {
            title: "Content ID",
            description: "SyncVault's Content ID Dashboard lets you track plays and streams in real- time, ensuring maximum revenue and protecting your creative work.",
            btnText: "Visit Content ID Dashboard",
            icon: PresentationChartBarIcon
        },
        {
            title: "Promote Your Tracks",
            description: "SyncVault's Promotion Tools let artists create custom campaigns to increase their reach.Content creators can participate by using the artist's music, earning rewards while helping boost visibility and engagement.",
            btnText: "Promote Tracks",
            icon: MegaphoneIcon
        },
        {
            title: "Distribute Your Tracks",
            description: "SyncVault's Distribution Dashboard helps artists and labels expand their reach, supporting over 7,000 labels and the top 100 distribution channels.Track streams, plays, and shares to ensure every interaction rewards your creative efforts.",
            btnText: "Visit Distribution Dashboard",
            icon: GlobeAltIcon
        },
        {
            title: "Create Pools",
            description: "SyncVault's Staking Tools let artists create pools where fans stake to earn APY and unlock exclusive rewards, enhancing fan engagement and offering unique incentives.",
            btnText: "Create Staking Pools",
            icon: FireIcon
        },
        {
            title: "Create Polls",
            description: "SyncVault's Voting Polls Creation Tools empower artists to engage fans by creating polls.Fans can vote on their favorite content, helping shape the artist's direction while enjoying exclusive rewards.",
            btnText: "Create Voting Polls",
            icon: CursorArrowRaysIcon
        },
        {
            title: "Create Quests",
            description: "SyncVault's Quest Creation Tools enable artists and creators to design engaging quests for users.Participants can follow the rules to earn rewards while actively supporting their favorite creators.",
            btnText: "Create Quests Polls",
            icon: PuzzlePieceIcon
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                color: "white",
            }}
        >
            {/* Background image component */}
            <Box
                sx={{
                    width: "60%",
                    backgroundImage: "url('/bg1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    pl: 5,
                }}
            >
                <Box sx={{ maxWidth: "600px", textAlign: "left", zIndex: 1 }}>
                    <React.Fragment>
                        <Box color={'grey.A100'} className={spaceGrotesk.className} fontSize={68} component="h1" mb={3} lineHeight={1.1} sx={{ fontWeight: 'medium' }}>
                            SyncVault’s Unique Tools
                        </Box>
                        <Typography color={'grey.A100'} variant="body1" mb={5} pr={20} letterSpacing={.5}>
                            SyncVault provides tools for artists and creators to boost their reach, enhance revenue, track growth, and protect their work.
                        </Typography>
                    </React.Fragment>
                    <Box display="flex" gap={2}>
                        <Button variant="contained" sx={{ backgroundColor: 'white.main', py: 1.5, fontWeight: 'bold', fontSize: 'large' }} size="large">
                            Learn More
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<PlayCircleIcon width={26} />}
                            size="large"
                            sx={{
                                py: 1.5,
                                fontWeight: 'bold',
                                fontSize: 'large',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '4px',
                                color: 'grey.100',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.7)',
                                },
                            }}
                        >
                            Watch Tutorial
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Scrollable Box list */}
            <Box
                sx={{
                    width: "40%",
                    height: '100%',
                    border: '2px solid',
                    borderColor: 'grey.900',
                    backgroundColor: "tonalOffset.light",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    msOverflowStyle: "none", // for Internet Explorer and Edge
                    scrollbarWidth: "none", // for Firefox
                }}
            >
                {uniqueTools.map((tool, index) => {
                    const { icon: HeroIcon, title, description, btnText } = tool || {};
                    return (<Box
                        key={index}
                        display={'flex'}
                        sx={{
                            px: 3,
                            width: "100%",
                            my: 'auto',
                            height: '50%',
                            borderBottom: '2px solid',
                            borderColor: 'grey.900',
                            ":last-child": {
                                borderBottom: "none",
                            },
                            '&:hover': {
                                borderColor: 'grey.800',
                                bgcolor: 'grey.900',
                            },
                        }}
                    >
                        <Box my={'auto'} >
                            <IconButton
                                disableRipple
                                sx={{
                                    border: '1px solid #FF0050',
                                    borderRadius: '4px',
                                    color: 'white.main',
                                    cursor: 'default',
                                    py: 1.5,
                                    px: 2,
                                    mb: 5
                                }}
                            >
                                <HeroIcon width={24} color="#FF0050" />
                            </IconButton>
                            <Typography variant="h4" fontWeight="medium" className={spaceGrotesk.className} mb={2}>
                                {title}
                            </Typography>
                            <Typography variant="body1" color="grey.500" mb={4}>
                                {description}
                            </Typography>
                            <Button
                                variant="outlined"
                                endIcon={<ChevronRightIcon width={16} />}
                                size='small'
                                sx={{
                                    py: 1.5,
                                    px: 2,
                                    fontWeight: 'lighter',
                                    fontSize: 'small',
                                    letterSpacing: .5,
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '4px',
                                    color: 'grey.100',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        border: '1px solid rgba(255, 255, 255, 0.7)',
                                    },
                                }}
                            >
                                {btnText}
                            </Button>
                        </Box>
                    </Box>)
                }
                )}
            </Box>
        </Box>
    );
}
