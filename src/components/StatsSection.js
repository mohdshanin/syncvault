'use client';
import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

const StatsSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'tonalOffset.light',
                color: 'white.main',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'grey.900',
            }}>

            {/* Scroll Down Section */}
            <Box
                width={'30%'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    p: 4,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'grey.100',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                    }}>
                    <ArrowDownIcon width={24} />
                </Box>
                <Box textAlign={'left'} ml={2}>
                    <Typography variant="h6">Scroll Down</Typography>
                    <Typography color='grey.500' variant="body2">To Explore SV App Features</Typography>
                </Box>
            </Box>

            {/* Free Music Stats */}
            <Box
                width={'30%'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    borderLeft: '1px solid',
                    borderRight: '1px solid',
                    borderColor: 'grey.900',
                    height: '100%',
                    p: 4,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'grey.100',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        width: '45px',
                        height: '45px',
                    }}>
                    <MusicalNoteIcon width={24} fontWeight={'bold'} />
                </Box>
                <Box textAlign={'left'} ml={2}>
                    <Typography variant="h6">80,000+</Typography>
                    <Typography color='grey.500' variant="body2">Free to Use Music</Typography>
                </Box>
            </Box>

            {/* Active Users Stats with Avatars */}
            <Box width={'40%'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
                <Stack direction="row" spacing={-1}>
                    <Avatar src="/avatar1.png" />
                    <Avatar src="/avatar2.png" />
                    <Avatar src="/avatar3.png" />
                    <Avatar src="/avatar4.png" />
                </Stack>
                <Box textAlign={'left'} ml={2} >
                    <Typography variant="h6">30,000+</Typography>
                    <Typography color='grey.500' variant="body2">Active Users</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StatsSection;
