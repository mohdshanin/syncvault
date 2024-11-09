'use client'
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import { AppBar, Toolbar, Button, IconButton, Box, InputBase } from '@mui/material';
import { BellIcon } from '@heroicons/react/24/outline';

import { SwitchWithIcons } from '../assets/SwitchWithIcon';
import SearchInput from '../assets/SearchInput';

import { useThemeContext } from '../utils/ThemeRegistry';

const label = { inputProps: { "aria-label": "Theme Switch" } };

function Topbar() {
    const { toggleTheme, activeTheme } = useThemeContext();

    return (
        <AppBar
            position="sticky"
            sx={{
                width: '100%',
                border: '1px solid', borderColor: 'grey.900',
                top: 0,
                left: 0,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    color: 'grey.500',
                    bgcolor: 'tonalOffset.dark'
                }}>
                {/* Search Bar */}
                <SearchInput />
                {/* Notification Icon */}
                <Box sx={{
                    display: 'flex',
                    height: '72px',
                    border: '1px solid',
                    borderColor: 'grey.900',
                    alignItems: 'center',
                    '&:hover': { bgcolor: activeTheme ? "grey.900" : "grey.300" }
                }}>
                    <IconButton sx={{ mx: 1, color: "grey.500" }}>
                        <BellIcon width="24px" />
                    </IconButton>
                </Box>
                {/* Right-Side Buttons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 3 }}>
                    <Link color='grey.500' sx={{ '&:hover': { color: 'white.main' } }} underline='none' component={NextLink} href="/my-wallet">My Wallet</Link>
                    <Link color='grey.500' sx={{ '&:hover': { color: 'white.main' } }} underline='none' component={NextLink} href="/leaderboard">Leaderboard</Link>
                    <Link color='grey.500' sx={{ '&:hover': { color: 'white.main' } }} underline='none' component={NextLink} href="/communities">Communities</Link>
                    <Button
                        sx={{
                            backgroundColor: 'white.main',
                            ml: 1,
                            '&:hover': { backgroundColor: 'grey.300' },
                        }}
                        variant="contained"
                        disableRipple
                        size='large'
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
