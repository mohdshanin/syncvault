'use client';
import React from 'react';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import useTheme from '@mui/material/styles/useTheme';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';

import Topbar from '../components/Topbar';

import MenuListItem from '../assets/MenuListItem';
import * as MenuTabList from '../assets/MenuTabList';

export default function Sidebar({ children }) {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const { SidebarTabs } = MenuTabList;

    return (
        <Box sx={{ display: 'flex', overflowY: 'hidden' }} position="relative">
            <Drawer
                sx={{
                    flexShrink: 0,
                    position: 'sticky',
                    left: 0,
                    top: 0,
                    '& .MuiDrawer-paper': {
                        position: 'sticky',
                        height: '100vh',
                        boxSizing: 'border-box',
                        bgcolor: 'black.main',
                        left: 0,
                        top: 0,
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar
                    sx={{
                        bgcolor: 'black.main',
                        px: '16px',
                        position: 'sticky',
                        zIndex: 100,
                        left: 0,
                        top: 0,
                        mb: 2
                    }}
                    disableGutters
                >
                    <Image
                        src="/Logo.svg"
                        alt="logo image"
                        width={25}
                        height={25}
                        priority
                        style={{ filter: mode === 'light' ? 'invert(1)' : 'none' }}
                    />

                    <Typography
                        sx={{
                            ml: 1,
                        }}
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        SyncVault
                    </Typography>
                </Toolbar>

                {Object.keys(SidebarTabs).map((tab) => <List key={tab}
                    sx={{
                        bgcolor: 'black.main',
                        '& > *': {
                            mb: 1, // Adds margin-bottom to all children
                        },
                        '& > *:last-child': {
                            mb: 0, // Removes margin-bottom for the last child
                        },
                        ...(tab === 'Settings' && {
                            bgcolor: 'tonalOffset.light',
                            mt: 2,
                            position: 'sticky',
                            left: 0,
                            bottom: 0,
                            borderTop: '2px solid',
                            borderColor: 'grey.900',
                        }),
                    }}
                    component="nav"
                    {...((tab !== 'GetStarted' && tab !== 'Settings') && {
                        subheader: (
                            <ListSubheader
                                sx={{
                                    color: 'grey.A700',
                                    bgcolor: 'black.main',
                                }}
                                id="nested-list-subheader"
                                component="div"
                            >
                                {tab}
                            </ListSubheader>
                        ),
                    })}
                >
                    {SidebarTabs[tab]?.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
                )}
            </Drawer>

            <Box
                sx={{
                    color: 'white.main',
                    bgcolor: 'tonalOffset.light',
                }}
                width={'100%'}
                position="relative"
            >
                <Topbar />
                <Box
                    component="main"
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    pt={9}
                    sx={{
                        overflowY: 'scroll'
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
