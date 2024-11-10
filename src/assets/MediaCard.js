'use client'
import React, { useRef, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box, Avatar } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { ShareIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';

import TikTokIcon from './icons/tiktok';
import YouTubeIcon from './icons/youtube';
import HeartBorderIcon from './icons/heartborder';
import PauseIcon from './icons/pause';
import PlayRedIcon from './icons/playred';
import PlayWhiteIcon from './icons/playwhite';
import BarChartIcon from './icons/barchart';
import HeartFilledIcon from './icons/heartfilled';

export default function MediaCard() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isIconHovered, setIsIconHovered] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsIconHovered(false); // reset BarChart hover state on leaving card
            }}
            sx={{
                color: 'white.main',
                border: '1px solid',
                borderRadius: '4px',
                width: 350,
                mb: 5,
                borderColor: 'background.paper',
                '&:hover': {
                    backgroundColor: 'grey.900',
                },
            }}
        >
            <Box sx={{
                bgcolor: 'black.main',
                color: 'white.main',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                m: 2,
                mb: 0
            }}>
                <CardMedia
                    component="video"
                    ref={videoRef}
                    src='/syncvault-video.mp4'
                    loop
                    disableControls
                    sx={{
                        bgcolor: '#000',
                        width: '100%',
                        height: 160
                    }}

                />
                <IconButton
                    disableRipple
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                    }}
                    onMouseEnter={() => setIsIconHovered(true)}
                    onMouseLeave={() => setIsIconHovered(false)}
                    onClick={handlePlayPause}
                >
                    {/* Display PlayArro wIcon when video is paused and card is hovered */}
                    {isHovered && !isPlaying &&
                        (isIconHovered ? <PlayRedIcon /> : <PlayWhiteIcon />)}
                    {/* Display BarChartIcon when video is playing */}
                    {isPlaying && (isIconHovered ? <PauseIcon /> : <BarChartIcon />)}
                </IconButton>
            </Box>
            <CardContent >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <IconButton sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: '2px',
                            padding: .8,
                            border: '2px solid',
                            borderColor: 'grey.800',
                            width: 45,
                        }}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: '2px',
                            padding: .8,
                            border: '2px solid',
                            borderColor: 'grey.800',
                            width: 45
                        }}>
                            <TikTokIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <IconButton sx={{
                            borderRadius: '4px',
                            padding: .8,
                            border: '2px solid',
                            borderColor: 'grey.900',
                            backgroundColor: 'tonalOffset.light',
                            width: 45
                        }}
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? < HeartFilledIcon /> : <HeartBorderIcon />}
                        </IconButton>
                        <IconButton sx={{
                            borderRadius: '4px',
                            padding: .8,
                            border: '2px solid',
                            borderColor: 'grey.900',
                            backgroundColor: 'tonalOffset.light',
                            width: 45
                        }}>
                            <ShareIcon width={24} />
                        </IconButton>
                        <IconButton sx={{
                            borderRadius: '4px',
                            padding: .8,
                            border: '2px solid',
                            borderColor: 'grey.900',
                            backgroundColor: 'tonalOffset.light',
                            width: 45
                        }}>
                            <PlusIcon width={24} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Title and artist section */}
                <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Title of the song
                </Typography>
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
                        my: 2
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
                        Long Name of the Artist
                    </Typography>
                </Box>

                {/* Earnings and progress bar */}
                <Typography variant="body2" sx={{ fontSize: '14px', my: 3 }}>
                    Earn Upto: $1025 USD
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress sx={{
                        bgcolor: 'grey.800',
                        [`& .${linearProgressClasses.bar}`]: {
                            bgcolor: '#FF0050',
                        },

                    }} variant="determinate" value={40} />
                </Box>
            </CardContent>
        </Card>
    );
}
