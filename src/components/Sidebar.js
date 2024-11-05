'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import useTheme from '@mui/material/styles/useTheme';

import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/outline';
import { BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid';
import { BoltIcon } from '@heroicons/react/24/outline';
import { MusicalNoteIcon as MusicalNoteIconSolid } from '@heroicons/react/24/solid';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { PuzzlePieceIcon as PuzzlePieceIconSolid } from '@heroicons/react/24/solid';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { FireIcon as FireIconSolid } from '@heroicons/react/24/solid';
import { FireIcon } from '@heroicons/react/24/outline';
import { ServerStackIcon as ServerStackIconSolid } from '@heroicons/react/24/solid';
import { ServerStackIcon } from '@heroicons/react/24/outline';
import { TicketIcon as TicketIconSolid } from '@heroicons/react/24/solid';
import { TicketIcon } from '@heroicons/react/24/outline';
import { MapIcon as MapIconSolid } from '@heroicons/react/24/solid';
import { MapIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon as VideoCameraIconSolid } from '@heroicons/react/24/solid';
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { SparklesIcon as SparklesIconSolid } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { UserIcon as UserIconSolid } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';

import { useThemeContext } from '../utils/ThemeRegistry';
import { SwitchWithIcons } from '@/app/assets/SwitchWithIcon';

import * as globalConstants from '../utils/constants';
import MenuListItem from './MenuListItem';

const { SIDEBAR_TABS, SUB_SIDEBAR_TABS } = globalConstants;

const {
    GET_STARTED,
    USE_EARN,
    CLAIM_FREE_MUSIC,
    QUESTS,
    STAKING_POOLS,
    VOTING_POLLS,
    MY_PARTICIPATIONS,
    ARTIST_TOOLS,
    CREATOR_TOOLS,
    BRAND_TOOLS,
    PROFILE_SETTINGS,
    EXIT_APP
} = SIDEBAR_TABS;

const {
    DASHBOARD,
    CHALLENGES,
    PROMOTION,
    CONTENT_ID,
    DISTRIBUTION,
} = SUB_SIDEBAR_TABS;

const drawerWidth = 280;
const label = { inputProps: { "aria-label": "Switch demo" } };


export default function Sidebar({ children }) {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter();
    const pathname = usePathname();
    const { toggleTheme, activeTheme } = useThemeContext();
    const getStarted = [
        {
            tab: GET_STARTED,
            icon: <HomeIcon width="24px" color='grey.A700' />,
            iconSelect: <HomeIconSolid width="24px" color="grey.100" />,
        },
    ];

    const web2 = [{
        tab: USE_EARN,
        icon: <BoltIcon width="24px" color='grey.A700' />,
        iconSelect: <BoltIconSolid width="24px" color="grey.100" />,
        subHeader: 'Web3',
    },
    {
        tab: CLAIM_FREE_MUSIC,
        icon: <MusicalNoteIcon width="24px" color='grey.A700' />,
        iconSelect: <MusicalNoteIconSolid width="24px" color="grey.100" />,
    },];

    const web3 = [{
        tab: QUESTS,
        icon: <PuzzlePieceIcon width="24px" color='grey.A700' />,
        iconSelect: <PuzzlePieceIconSolid width="24px" color="grey.100" />,
        subHeader: 'Web3',
    },
    {
        tab: STAKING_POOLS,
        icon: <FireIcon width="24px" color='grey.A700' />,
        iconSelect: <FireIconSolid width="24px" color="grey.100" />,
    },
    {
        tab: VOTING_POLLS,
        icon: <ServerStackIcon width="24px" color='grey.A700' />,
        iconSelect: <ServerStackIconSolid width="24px" color="grey.100" />,
    },];

    const toolBaar = [{
        tab: MY_PARTICIPATIONS,
        icon: <TicketIcon width="24px" color='grey.A700' />,
        iconSelect: <TicketIconSolid width="24px" color="grey.100" />,
        subHeader: 'ToolBar',
    },
    {
        tab: ARTIST_TOOLS,
        icon: <SparklesIcon width="24px" color='grey.A700' />,
        iconSelect: <SparklesIconSolid width="24px" color="grey.100" />,
        menuOptions: [
            {
                subTab: DASHBOARD,
            },
            {
                subTab: CHALLENGES,
            },
            {
                subTab: PROMOTION,
            },
            {
                subTab: CONTENT_ID,
            },
            {
                subTab: DISTRIBUTION,
            },
            {
                subTab: STAKING_POOLS,
            },
            {
                subTab: VOTING_POLLS,
            },
        ],
    },
    {
        tab: CREATOR_TOOLS,
        icon: <VideoCameraIcon width="24px" color='grey.A700' />,
        iconSelect: <VideoCameraIconSolid width="24px" color="grey.100" />,
        menuOptions: [
            {
                subTab: DASHBOARD,
            },
            {
                subTab: CHALLENGES,
            },
            {
                subTab: PROMOTION,
            },
            {
                subTab: CONTENT_ID,
            },
        ],
    },
    {
        tab: BRAND_TOOLS,
        icon: <MapIcon width="24px" color='grey.A700' />,
        iconSelect: <MapIconSolid width="24px" color="grey.100" />,
        menuOptions: [
            {
                subTab: DASHBOARD,
            },
            {
                subTab: CHALLENGES,
            },
        ],
    },];

    const settings = [{
        tab: PROFILE_SETTINGS,
        icon: <UserIcon width="24px" color={theme.palette.white.main} />,
        iconSelect: <UserIconSolid width="24px" color="grey.100" />,

    },
    {
        tab: EXIT_APP,
        icon: <ArrowLeftEndOnRectangleIcon width="24px" color={theme.palette.grey.A400} />
    },];

    return (
        <Box sx={{ display: 'flex' }} position="relative">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >
                        Header
                    </Typography>
                    <SwitchWithIcons {...label}
                        checked={activeTheme}
                        onChange={toggleTheme}
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: 'black.main',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar
                    sx={{
                        bgcolor: 'black.main',
                        position: 'sticky',
                        px: '16px',
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
                    {getStarted.map((item, index) => <MenuListItem key={index} item={item} />)}
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
                    {web2.map((item, index) => <MenuListItem key={index} item={item} />)}
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
                    {web3.map((item, index) => <MenuListItem key={index} item={item} />)}

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
                    {toolBaar.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
                <Box flexGrow={1} />
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        mt: 2,
                        position: 'sticky',
                        zIndex: 100,
                        left: 0,
                        bottom: 0,
                        borderTop: '2px solid',
                        borderColor: 'grey.900'
                    }}
                    component="div"
                >
                    {settings.map((item, index) => <MenuListItem key={index} item={item} />)}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
                {children}
            </Box>
        </Box>
    );
}
