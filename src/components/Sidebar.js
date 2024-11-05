'use client';
import React, { useMemo, useState } from 'react';
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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import useTheme from '@mui/material/styles/useTheme';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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

import { useThemeContext } from '../utils/ThemeRegistry';
import { SwitchWithIcons } from '@/app/assets/SwitchWithIcon';

import * as globalConstants from '../utils/constants';

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
} = SIDEBAR_TABS;

const {
    DASHBOARD,
    CHALLENGES,
    PROMOTION,
    CONTENT_ID,
    DISTRIBUTION,
} = SUB_SIDEBAR_TABS;

const drawerWidth = 240;
const label = { inputProps: { "aria-label": "Switch demo" } };


export default function Sidebar({ children }) {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter();
    const pathname = usePathname();
    const { toggleTheme, activeTheme } = useThemeContext();
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
    },];;


    const menuListItem = item => {
        const { tab, icon, iconSelect, menuOptions } = item || {};
        // const { subTab } = menuOptions || [];
        const hasSubTabs = Array.isArray(menuOptions);
        const tabValue = tab.toLowerCase().replace(/[\s\W]+/g, '-');
        const isActiveTab =
            pathname.includes(`/${tabValue}`) ||
            (pathname === '/' && tab === GET_STARTED);

        const handleMenuListItemClick = (value) => {
            if (isEmpty(menuOptions)) {
                if ((value) === GET_STARTED) {
                    router.replace('/');
                } else router.replace(`/${tabValue}`);
            }
        };

        return (
            <ListItem key={tabValue} disablePadding>
                <ListItemButton
                    sx={{
                        gap: 2,
                        mx: 2,
                        p: 0.5,
                        pl: 1,
                        color: 'grey.A700',
                        '&.Mui-selected': {
                            color: 'grey.100',
                            bgcolor: 'grey.900',
                            borderRadius: '4px',
                        },
                        '&.Mui-selected:hover': {
                            bgcolor: 'grey.800',
                        },
                        "&:hover": { bgcolor: activeTheme ? "grey.900" : "grey.500" }
                    }}
                    selected={isActiveTab && !open}
                    onClick={() => {
                        if ((tab) === GET_STARTED) {
                            router.replace('/');
                        } else router.replace(`/${tabValue}`)
                    }}
                >

                    {icon}
                    <ListItemText primary={tab} />
                    {hasSubTabs && <Chip label={3} size="small" />}
                    {hasSubTabs && <Box
                        onClick={(e) => {
                            handleClick();
                            e.stopPropagation();
                        }}
                    >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Box>}
                </ListItemButton>
                {hasSubTabs && <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {(menuOptions || []).map(({ subTab = '' }) => {
                            const subTabValue = subTab.toLowerCase().replace(/[\s\W]+/g, '-');
                            return <ListItem key={subTabValue} disablePadding>
                                <ListItemButton
                                    sx={{
                                        gap: 2,
                                        mx: 2,
                                        p: 0.5,
                                        pl: 1,
                                        color: 'grey.A700',
                                        '&.Mui-selected': {
                                            color: 'grey.100',
                                            bgcolor: 'grey.900',
                                            borderRadius: '4px',
                                        },
                                        '&.Mui-selected:hover': {
                                            bgcolor: 'grey.800',
                                        },
                                        "&:hover": { bgcolor: "grey.300" }
                                    }}
                                    selected={isActiveTab}
                                    onClick={() => router.replace(`/${subTabValue}`)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: '25px',
                                        }}
                                    />
                                    <ListItemText primary={subTabValue} />
                                </ListItemButton>
                            </ListItem>
                        })}
                    </List>
                </Collapse>}
            </ListItem>
        );
    };

    return (
        <Box sx={{ display: 'flex' }} position="relative">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >
                        Permanent drawer
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
                        src="Logo.svg"
                        alt="image"
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
                    {['Get Started'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                sx={{
                                    gap: 2,
                                    mx: 2,
                                    p: 0.5,
                                    pl: 1,
                                    color: 'grey.A700',
                                    '&.Mui-selected': {
                                        color: 'grey.100',
                                        bgcolor: 'grey.900',
                                        borderRadius: '4px',
                                    },
                                    '&.Mui-selected:hover': {
                                        bgcolor: 'grey.800',
                                    },
                                    "&:hover": { bgcolor: activeTheme ? "grey.900" : "grey.500" }
                                }}
                                selected={pathname === '/'}
                                onClick={() => router.push('/')}
                            >
                                {pathname === '/' ? (
                                    <HomeIconSolid width="24px" color="grey.100" />
                                ) : (
                                    <HomeIcon width="24px" color='grey.A700' />
                                )}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
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
                    {['Use & Earn', 'Claim-Free Music'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                sx={{
                                    gap: 2,
                                    mx: 2,
                                    p: 0.5,
                                    pl: 1,
                                    color: 'grey.A700',
                                    '&.Mui-selected': {
                                        color: 'grey.100',
                                        bgcolor: 'grey.900',
                                        borderRadius: '4px',
                                    },
                                    '&.Mui-selected:hover': {
                                        bgcolor: 'grey.800',
                                    },
                                    "&:hover": { bgcolor: "text.disabled" }
                                }}
                                selected={
                                    pathname === `/${text.replaceAll(' ', '').toLowerCase()}`
                                }
                                onClick={() =>
                                    router.push(`/${text.replaceAll(' ', '').toLowerCase()}`)
                                }
                            >
                                {index % 2 === 0 ? (
                                    <HomeIcon width="24px" color='grey.A700' />
                                ) : (
                                    <HomeIconSolid
                                        width="24px"
                                        color='grey.100'
                                    />
                                )}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List
                    sx={{ bgcolor: 'black.main' }}
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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                sx={{
                                    gap: 2,
                                    mx: 2,
                                    p: 0.5,
                                    pl: 1,
                                    color: 'grey.A700',
                                    '&.Mui-selected': {
                                        color: 'grey.100',
                                        bgcolor: 'grey.900',
                                        borderRadius: '4px',
                                    },
                                    '&.Mui-selected:hover': {
                                        bgcolor: 'grey.800',
                                    },
                                    "&:hover": { bgcolor: "grey.300" }
                                }}
                                selected={
                                    pathname === `/${text.replaceAll(' ', '').toLowerCase()}`
                                }
                                onClick={() =>
                                    router.push(`/${text.replaceAll(' ', '').toLowerCase()}`)
                                }
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 'fit-content',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List
                    sx={{ bgcolor: 'black.main' }}
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
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                gap: 2,
                                mx: 2,
                                p: 0.5,
                                pl: 1,
                                color: 'grey.A700',
                                '&.Mui-selected': {
                                    color: 'grey.100',
                                    bgcolor: 'grey.900',
                                    borderRadius: '4px',
                                },
                                '&.Mui-selected:hover': {
                                    bgcolor: 'grey.800',
                                },
                                "&:hover": { bgcolor: "grey.300" }
                            }}
                            selected={pathname === `/Starred` && !open}
                            onClick={() => {
                                router.push('/Starred');
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 'fit-content',
                                }}
                            >
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            <Chip label={3} size="small" />
                            <Box
                                onClick={(e) => {
                                    handleClick();
                                    e.stopPropagation();
                                }}
                            >
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </Box>
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem disablePadding>

                                <ListItemButton
                                    sx={{
                                        gap: 2,
                                        mx: 2,
                                        p: 0.5,
                                        pl: 1,
                                        color: 'grey.A700',
                                        '&.Mui-selected': {
                                            color: 'grey.100',
                                            bgcolor: 'grey.900',
                                            borderRadius: '4px',
                                        },
                                        '&.Mui-selected:hover': {
                                            bgcolor: 'grey.800',
                                        },
                                        "&:hover": { bgcolor: "grey.300" }
                                    }}
                                    selected={pathname === '/Starred'}
                                    onClick={() => router.push('/Starred')}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: '25px',
                                        }}
                                    />
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        gap: 2,
                                        mx: 2,
                                        p: 0.5,
                                        pl: 1,
                                        color: 'grey.A700',
                                        '&.Mui-selected': {
                                            color: 'grey.100',
                                            bgcolor: 'grey.900',
                                            borderRadius: '4px',
                                        },
                                        '&.Mui-selected:hover': {
                                            bgcolor: 'grey.800',
                                        },
                                        "&:hover": { bgcolor: "grey.300" }
                                    }}
                                    selected={pathname === '/Important'}
                                    onClick={() => router.push('/Important')}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: '25px',
                                        }}
                                    />
                                    <ListItemText primary="Important" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>

                                <ListItemButton
                                    sx={{
                                        gap: 2,
                                        mx: 2,
                                        p: 0.5,
                                        pl: 1,
                                        color: 'grey.A700',
                                        '&.Mui-selected': {
                                            color: 'grey.100',
                                            bgcolor: 'grey.900',
                                            borderRadius: '4px',
                                        },
                                        '&.Mui-selected:hover': {
                                            bgcolor: 'grey.800',
                                        },
                                        "&:hover": { bgcolor: "grey.300" }
                                    }}
                                    selected={pathname === '/Spam'}
                                    onClick={() => router.push('/Spam')}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: '25px',
                                        }}
                                    />
                                    <ListItemText primary="Spam" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
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
                    }}
                    component="div"
                >
                    <Divider />
                    {['Profile Settings', 'Exit App'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            {/* Lower part of Sidebar fixed in bottom left */}
                            <ListItemButton
                                sx={{
                                    gap: 2,
                                    ml: 2,
                                    p: 0.5,
                                    pl: 1,
                                    my: 1,
                                    color: 'grey.A700',
                                    '&.Mui-selected': {
                                        color: 'grey.100',
                                        bgcolor: 'grey.900',
                                        borderRadius: '4px',
                                    },
                                    '&.Mui-selected:hover': {
                                        bgcolor: 'grey.800',
                                    },
                                    "&:hover": { bgcolor: "grey.300" }
                                }}
                                // selected={pathname === '/'}
                                onClick={() => router.push('/')}
                            >
                                {pathname === '/' ? (
                                    <HomeIconSolid
                                        width="24px"
                                        color={theme.palette.white.main}
                                    />
                                ) : (
                                    <HomeIcon width="24px" color={theme.palette.grey.A400} />
                                )}
                                <ListItemText primary={text} />
                                {index === 0 && <ExpandLess />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
                {children}
            </Box>
        </Box>
    );
}
