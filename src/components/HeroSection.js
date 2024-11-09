'use client';
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { spaceGrotesk } from "../utils/fonts";

const VideoComponent = () => {
    return (<Box
        sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "tonalOffset.light",
        }}
    >
        <video
            src="/syncvault-video.mp4"
            autoPlay
            loop
            muted
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "75% 40%",
            }}
        />
    </Box>)
}

export default function HeroSection({ rightTextContainer = false }) {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                color: "white",
            }}
        >
            {/* video component*/}
            {rightTextContainer && <VideoComponent />}

            {/* background image component*/}
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
                    {!rightTextContainer && <React.Fragment>
                        <Box color={'grey.A100'} className={spaceGrotesk.className} fontSize={68} component="h1" mb={3} lineHeight={1.1} sx={{ fontWeight: 'medium' }}>
                            Welcome to SyncVault App
                        </Box>
                        <Typography color={'grey.A100'} variant="body1" mb={5} pr={20} letterSpacing={.5}>
                            The platform where artists, creators, and fans collaborate to expand
                            their audiences and earn rewards through unique monetization
                            opportunities.
                        </Typography>
                    </React.Fragment>}
                    {rightTextContainer && <React.Fragment>
                        <Box color={'grey.A100'} className={spaceGrotesk.className} fontSize={68} component="h1" mb={3} lineHeight={1.1} sx={{ fontWeight: 'medium' }}>
                            Welcome to House of Cults
                        </Box>
                        <Typography color={'grey.A100'} variant="body1" mb={5} pr={20} letterSpacing={.5}>
                            Explore SyncVault&apos;s Web3 Features: Artists and creators can
                            create staking pools and voting polls, while fans participate
                            for exclusive rewards and Web3 benefits
                        </Typography>
                    </React.Fragment>}
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

            {/* video component*/}
            {!rightTextContainer && <VideoComponent />}

        </Box>
    );
}
