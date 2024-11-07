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

import MenuListItem from '../utils/MenuListItem';
import * as MenuTabList from '../utils/MenuTabList';

export default function Sidebar({ children }) {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const { GetStarted, Web2, Web3, ToolBaar, Settings } = MenuTabList;

    return (
        <Box sx={{ display: 'flex', overflow: 'hidden' }} position="relative">
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
                <List
                    sx={{
                        bgcolor: 'black.main',
                        mt: 2,
                    }}
                    component="nav"
                >
                    {GetStarted.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
                <List
                    sx={{
                        bgcolor: 'black.main',
                        '& > *': {
                            mb: 1, // Adds margin-bottom to all children
                        },
                        '& > *:last-child': {
                            mb: 0, // Removes margin-bottom for the last child
                        },
                    }}
                    component="nav"
                    subheader={
                        <ListSubheader
                            sx={{
                                color: 'grey.A700',
                                bgcolor: 'black.main',
                                m: 0,
                            }}
                            id="nested-list-subheader"
                            component="div"
                        >
                            Web2
                        </ListSubheader>
                    }
                >
                    {Web2.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
                <List
                    sx={{
                        bgcolor: 'black.main',
                        '& > *': {
                            mb: 1, // Adds margin-bottom to all children
                        },
                        '& > *:last-child': {
                            mb: 0, // Removes margin-bottom for the last child
                        },
                    }}
                    component="nav"
                    subheader={
                        <ListSubheader
                            sx={{
                                color: 'grey.A700',
                                bgcolor: 'black.main',
                            }}
                            id="nested-list-subheader"
                            component="div"
                        >
                            Web2
                        </ListSubheader>
                    }
                >
                    {Web3.map((item, index) => <MenuListItem key={index} item={item} />)}

                </List>
                <List
                    sx={{
                        bgcolor: 'black.main',
                        '& > *': {
                            mb: 1, // Adds margin-bottom to all children
                        },
                        '& > *:last-child': {
                            mb: 0, // Removes margin-bottom for the last child
                        },
                    }}
                    component="nav"
                    subheader={
                        <ListSubheader
                            sx={{
                                color: 'grey.A700',
                                bgcolor: 'black.main',
                            }}
                            id="nested-list-subheader"
                            component="div"
                        >
                            Toolbar
                        </ListSubheader>
                    }
                >
                    {ToolBaar.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
                <Box flexGrow={1} />
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        mt: 2,
                        position: 'sticky',
                        left: 0,
                        bottom: 0,
                        borderTop: '2px solid',
                        borderColor: 'grey.900'
                    }}
                    component="div"
                >
                    {Settings.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
            </Drawer>
            <Box
                sx={{
                    color: 'white.main',
                    backgroundColor: 'black.main'
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
