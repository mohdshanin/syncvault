'use client'
import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, InputBase } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import { BellIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { SwitchWithIcons } from '@/app/assets/SwitchWithIcon';

import { useThemeContext } from '../utils/ThemeRegistry';

const label = { inputProps: { "aria-label": "Theme Switch" } };

function Topbar() {
    const { toggleTheme, activeTheme } = useThemeContext();
    const theme = useTheme();
    console.log('theme', theme);

    return (
        <AppBar
            position="sticky"
            sx={{
                width: '100%',
                border: '1px solid', borderColor: 'grey.900',
                top: 0,
                left: 0,
            }}
            color='success' >
            <Toolbar sx={{
                color: 'grey.A700',
                bgcolor: 'black.main'
            }}>
                {/* Search Bar */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, }}>
                    <MagnifyingGlassIcon width="24px" color={theme.palette.grey.A400} />
                    <InputBase placeholder="Search..."
                        sx={{
                            ml: 1,
                            width: '100%',
                            pr: 2,
                            'input::placeholder': {
                                color: 'grey.A400',
                                opacity: 1
                            }
                        }} />
                </Box>
                {/* Notification Icon */}
                <Box sx={{ display: 'flex', height: '72px', border: '1px solid', borderColor: 'grey.900', alignItems: 'center' }}>
                    <IconButton sx={{ mx: 1, color: "grey.A700" }}>
                        <BellIcon width="24px" />
                    </IconButton>
                </Box>
                {/* Right-Side Buttons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 3 }}>
                    <Button color="inherit">My Wallet</Button>
                    <Button color="inherit">Leaderboard</Button>
                    <Button color="inherit">Communities</Button>
                    <Button
                        sx={{ backgroundColor: 'white.main', ml: 1 }}
                        variant="contained"
                    >
                        Sign In / Sign Up
                    </Button>
                    <SwitchWithIcons {...label}
                        checked={activeTheme}
                        onChange={toggleTheme}
                    />
                </Box>
            </Toolbar>
        </AppBar >
    );
};

export default Topbar;
