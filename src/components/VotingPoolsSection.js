// components/VotingPoolsComponent.js

import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, LinearProgress, IconButton } from '@mui/material';
import { ShareIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import HeaderOFHomeSection from '@/assets/HeaderOFHomeSection';

export default function VotingPoolsSection() {
    const title = 'SyncVault Voting Pools';
    const description = 'Participate in voting polls to earn VidCents.';
    const buttonText = 'View All Pools';

    const votingPoolsData = [
        { id: 1, creator: 'Pragya Sharma', question: 'Question for the poll?', reward: '1234 $VC', votes: '1.2k' },
        { id: 2, creator: 'Pragya Sharma', question: 'Question for the poll?', reward: '1234 $VC', votes: '1.2k' },
        { id: 3, creator: 'Pragya Sharma', question: 'Question for the poll?', reward: '1234 $VC', votes: '1.2k' },
        { id: 4, creator: 'Pragya Sharma', question: 'Question for the poll?', reward: '1234 $VC', votes: '1.2k' },
    ];

    return (
        <Box sx={{ mb: 15 }}>
            {/* Voting Pool Banner */}
            <HeaderOFHomeSection title={title} description={description} buttonText={buttonText} />

            {/* Voting Pool Cards */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: 5,
                    m: 6,
                }}>
                {votingPoolsData.map((pool) => (
                    <Card
                        key={pool.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '48%',
                            color: 'white.main',
                            border: '2px solid',
                            p: .5,
                            borderColor: 'grey.900',
                            bgcolor: 'tonalOffset.light',
                            '&:hover': {
                                borderColor: 'grey.800',
                                bgcolor: 'grey.900',
                            },
                        }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: 'background.paper',
                                        borderRadius: '50px',
                                        p: 1,
                                        border: '1px solid',
                                        borderColor: 'grey.900',
                                        width: 'fit-content',
                                        mr: 'auto'
                                    }}
                                >
                                    <Avatar
                                        alt="Artist Name"
                                        src="/user.png"  // Replace with the path to your avatar image
                                        sx={{ width: 24, height: 24, marginRight: 1 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        mr={1}
                                    >
                                        {pool.creator}
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    startIcon={<ShareIcon width={22} />}
                                    size="large"
                                    sx={{
                                        pl: 2,
                                        py: 1,
                                        color: 'grey.500',
                                        border: '2px solid',
                                        borderColor: 'grey.900'
                                    }}
                                >
                                    Share
                                </Button>
                            </Box>

                            <Box sx={{ display: 'flex', width: '100%', my: 3, height: '100%', }}>
                                <Box sx={{ width: '55%', mr: 5 }}>
                                    <Typography variant="h6" mb={4}>{pool.question}</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="body2" color="grey.500" >Remaining Rewards</Typography>
                                        <Typography variant="h6">{pool.reward}</Typography>
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <LinearProgress sx={{
                                            bgcolor: 'grey.500',
                                            height: 2,
                                            '& .MuiLinearProgress-bar': {
                                                bgcolor: '#FF0050',
                                            },

                                        }} variant="determinate" value={40} />
                                    </Box>
                                </Box>
                                <Box sx={{ width: '45%', mt: 'auto', textAlign: 'right' }}>
                                    <Button
                                        variant="contained"
                                        startIcon={<UserGroupIcon width={24} />}
                                        size="medium"
                                        sx={{
                                            fontWeight: 300,
                                            color: 'grey.100',
                                            bgcolor: 'grey.900',
                                            pl: 2,
                                            py: 1,
                                        }}
                                    >
                                        {pool.votes} Votes Submited
                                    </Button>
                                </Box>
                            </Box>
                            <Button
                                variant="contained"
                                size='large'
                                sx={{
                                    backgroundColor: '#ff1744',
                                    color: 'grey.100',
                                    width: '100%',
                                    fontWeight: 'light',
                                    textTransform: 'none',
                                    mt: 1, py: 1.5
                                }}>
                                Vote Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

