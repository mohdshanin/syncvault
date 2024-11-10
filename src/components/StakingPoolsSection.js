'use client';
import React, { useState } from 'react';
import { Box, Typography, Button, Avatar, Card, CardContent, Collapse, Divider, LinearProgress, linearProgressClasses } from '@mui/material';
import HeaderOFHomeSection from '@/assets/HeaderOFHomeSection';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';


export default function StakingPoolsSection() {
    const title = 'SyncVault Staking Pools';
    const description = 'Stake your $SVT to unlock exclusive rewards from your favorite creators and artists.';
    const buttonText = 'View All Pools';

    const poolData = [
        {
            id: 1,
            title: '120-Days Pool',
            creator: 'Pragya Sharma',
            apy: '5%',
            remaining: '12345 $SVT',
            reward: 'Discount Code',
            poolAmount: '20,000 $SVT',
            startDate: '14 June 2024',
            endDate: '14 Sept 2024',
            description: 'Description of reward selected can be added here. links will be clickable. Max characters- 150'
        },
        {
            id: 2,
            title: '120-Days Pool',
            creator: 'Pragya Sharma',
            apy: '5%',
            remaining: '12345 $SVT',
            reward: 'Discount Code',
            poolAmount: '20,000 $SVT',
            startDate: '14 June 2024',
            endDate: '14 Sept 2024',
            description: 'Description of reward selected can be added here. links will be clickable. Max characters- 150'
        },
        {
            id: 3,
            title: '120-Days Pool',
            creator: 'Pragya Sharma',
            apy: '5%',
            remaining: '12345 $SVT',
            reward: 'Discount Code',
            poolAmount: '20,000 $SVT',
            startDate: '14 June 2024',
            endDate: '14 Sept 2024',
            description: 'Description of reward selected can be added here. links will be clickable. Max characters- 150'
        },
    ];

    return (
        <Box sx={{ mb: 15 }}>
            {/* Voting Pool Banner */}
            <HeaderOFHomeSection title={title} description={description} buttonText={buttonText} />

            {/* Voting Pool Cards */}
            <Box sx={{ display: 'flex', gap: 2, mt: 3, mx: 5, flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {poolData.map((pool) => (
                    <PoolCard key={pool.id} pool={pool} />
                ))}
            </Box>
        </Box>
    );
}

function PoolCard({ pool }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <Card
            sx={{
                color: 'white.main',
                bgcolor: expanded ? 'background.paper' : 'tonalOffset.dark',
                mb: 1,
                width: '100%'
            }}>
            <Box sx={{ display: 'flex', py: 2, alignItems: 'center' }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box display={'flex'} alignItems={'center'} >
                        <Avatar src="/avatar4.png" alt="Creator Avatar" sx={{ width: 48, height: 48, mr: 1 }} />
                        <Box  >
                            <Typography variant="h6">{pool.title}</Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    borderRadius: '50px',
                                    px: 1.5,
                                    py: 0.5,
                                    bgcolor: 'grey.900',
                                    width: 'fit-content',
                                    color: 'grey.100'
                                }}
                            >
                                by {pool.creator}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center', mr: 5 }}>
                        <Typography variant="body1" color="grey.500">APY</Typography>
                        <Typography variant="h6">{pool.apy}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', mr: 5 }}>
                        <Typography variant="body2" color="grey.500">Remaining</Typography>
                        <Typography variant="h6">{pool.remaining}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', mr: 5 }}>
                        <Typography variant="body2" color="grey.500">Reward</Typography>
                        <Typography variant="h6">{pool.reward}</Typography>
                    </Box>
                    <Button
                        onClick={toggleExpand}
                        variant="outlined"
                        endIcon={expanded ? <ChevronUpIcon width={16} /> : <ChevronDownIcon width={16} />}
                        sx={{
                            fontSize: 'medium',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '4px',
                            color: 'grey.400',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            py: 1,
                            pr: 3,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.7)',
                            },
                        }}
                    >
                        More Details
                    </Button>
                </CardContent>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ borderRadius: 4 }}>
                <Divider sx={{ borderColor: 'grey.A700', my: 1 }} />
                <Box sx={{ display: 'flex', width: '100%', mb: 4, mt: 8, px: 3 }}>
                    <Box sx={{ width: '50%', mr: 5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="body2" color="grey.500" >Total Pool Amount</Typography>
                            <Typography variant="body2">{pool.poolAmount}</Typography>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress sx={{
                                bgcolor: 'grey.800',
                                height: 6,
                                [`& .${linearProgressClasses.bar}`]: {
                                    bgcolor: '#FF0050',
                                },

                            }} variant="determinate" value={40} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 10 }}>
                            <Box>
                                <Typography variant="body2" color="grey.500">Start Date</Typography>
                                <Typography variant="body1">{pool.startDate}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="grey.500">End Date</Typography>
                                <Typography variant="body1">{pool.endDate}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="body2" color="grey.500">Description</Typography>
                        <Typography variant="body1" pr={10}>{pool.description}</Typography>
                        <Button
                            variant="contained"
                            size='large'
                            sx={{
                                bgcolor: '#FF0050',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'light',
                                width: '100%',
                                py: 1.5,
                                mt: 5
                            }}
                        >
                            Stake Tokens
                        </Button>
                    </Box>
                </Box>
            </Collapse>
        </Card>
    );
}
