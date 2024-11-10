'use client';
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, LinearProgress, IconButton } from '@mui/material';
import InformationBanner from '@/assets/InformationBanner';

import YouTubeIcon from '../assets/icons/youtube';

export default function QuestSection() {
    const questData = [
        { id: 1, creator: 'Pragya Sharma', title: 'Quest title', description: 'Description of the Quest in about two lines for users to understand', reward: '1025 $SVT' },
        { id: 2, creator: 'Pragya Sharma', title: 'Quest title', description: 'Description of the Quest in about two lines for users to understand', reward: '1025 $SVT' },
        { id: 3, creator: 'Pragya Sharma', title: 'Quest title', description: 'Description of the Quest in about two lines for users to understand', reward: '1025 $SVT' },
        { id: 4, creator: 'Pragya Sharma', title: 'Quest title', description: 'Description of the Quest in about two lines for users to understand', reward: '1025 $SVT' },
    ];

    return (
        <Box >
            {/* Quest Banner */}
            <InformationBanner title={'Earn as a Fan: Complete quests from your favorite creators to unlock rewards.'} />

            {/* Quest Cards */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: 5,
                    m: 6,
                }}>
                {questData.map((quest) => (
                    <Card
                        key={quest.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '48%',
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
                                        bgcolor: 'background.paper',
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
                                        src="/user.png"
                                        sx={{ width: 24, height: 24, marginRight: 1 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        mr={1}
                                    >
                                        {quest.creator}
                                    </Typography>
                                </Box>
                                <IconButton sx={{
                                    backgroundColor: 'background.paper',
                                    borderRadius: '2px',
                                    py: .5,
                                    border: '1.5px solid',
                                    borderColor: 'grey.800',
                                    width: 45,
                                }}>
                                    <YouTubeIcon />
                                </IconButton>
                            </Box>

                            <Box sx={{ display: 'flex', width: '100%', mt: 3, height: '100%', }}>
                                <Box sx={{ width: '50%' }}>
                                    <Typography variant="h6" mb={2}>{quest.title}</Typography>
                                    <Typography variant="body1" color="grey.500">{quest.description}</Typography>
                                </Box>
                                <Box sx={{ width: '50%', mt: 'auto', mb: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                        <Typography variant="body2" color="grey.500" >Earn Upto:</Typography>
                                        <Typography variant="body2">{quest.reward}</Typography>
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
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box >
    );
};

