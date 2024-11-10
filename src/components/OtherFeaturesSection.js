'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';

import HeaderOFHomeSection from '../assets/HeaderOFHomeSection';

export default function OtherFeaturesSection() {
    const title = 'Other Features';

    const otherFeatures = [
        {
            title: 'My Wallet',
            description: 'Manage your earnings, deposit funds, swap tokens, and more with the SV Wallet.'
        },
        {
            title: 'Leaderboard',
            description: 'Discover top creators in each category and join the best with the SV Leaderboard.'
        },
        {
            title: 'Communities',
            description: 'Connect with your favorite creators and fans through SV Communities.'
        },
    ]

    return (
        <Box sx={{ mb: 10 }}>
            {/* Other Features Banner */}
            <HeaderOFHomeSection title={title} />

            <Box
                sx={{
                    display: 'flex',
                    border: '2px solid',
                    borderColor: 'grey.900',
                    px: 3
                }}>

                {/*Other Feature Cards */}
                {otherFeatures.map((feature, index) =>
                    <Card key={feature.title}
                        sx={{
                            backgroundColor: "black.main",
                            color: 'white.main',
                            borderRight: '2px solid',
                            borderLeft: index === 0 ? '2px solid' : 0,
                            borderColor: 'grey.900',
                            borderRadius: 0,
                        }}>
                        <Box sx={{
                            color: 'white.main',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '2px',
                            m: 2,
                            mb: 3,
                        }}>
                            <CardMedia
                                component="image"
                                image='/bg1.png'
                                aria-label='Feature Image'
                                sx={{
                                    bgcolor: 'black.main',
                                    width: '100%',
                                    height: 160
                                }}
                            />
                        </Box>
                        <CardContent>
                            <Typography variant="h6" mb={2}>{feature.title}</Typography>
                            <Typography variant="body1" color="grey.500" mb={2}>
                                {feature.description}
                            </Typography>
                            <Button
                                variant="outlined"
                                endIcon={<ChevronRightIcon width={16} />}
                                sx={{
                                    py: 1.5,
                                    px: 2,
                                    mb: 1,
                                    width: '100%',
                                    fontWeight: 'lighter',
                                    fontSize: 'medium',
                                    letterSpacing: .5,
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '4px',
                                    color: 'grey.400',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        border: '1px solid rgba(255, 255, 255, 0.7)',
                                    },
                                }}
                            >
                                Go to {feature.title}
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Box>
    );
}
