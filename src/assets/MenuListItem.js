'use client';
import { useState } from "react";
import { useThemeContext } from "@/utils/ThemeRegistry";
import { useRouter, usePathname } from "next/navigation";
import { Box, Chip, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import * as globalConstants from '../utils/constants';
const { SIDEBAR_TABS } = globalConstants;

const {
    GET_STARTED,
    PROFILE_SETTINGS,
    EXIT_APP } = SIDEBAR_TABS;

function MenuListItem({ item }) {
    const pathname = usePathname();
    const router = useRouter();
    const { activeTheme } = useThemeContext();
    const { tab, icon, iconSelect, menuOptions } = item || {};
    const [open, setOpen] = useState(false);
    const [selectedSubTab, setSelectedSubTab] = useState('');
    const handleClick = () => {
        setOpen(!open);
    };
    const isSettingsTab = tab === PROFILE_SETTINGS || tab === EXIT_APP;

    const hasSubTabs = Array.isArray(menuOptions);
    const tabValue = tab.toLowerCase().replace(/[\s\W]+/g, '-');
    const isActiveTab =
        (pathname.includes(`/${tabValue}`) ||
            pathname === '/' && tab === GET_STARTED);

    return (
        <Box key={`${tabValue}-item`}>
            <ListItem key={tabValue} disablePadding>
                <ListItemButton
                    sx={{
                        mx: 2,
                        p: 0.5,
                        pl: 1,
                        my: isSettingsTab ? 1 : 0,
                        color: 'grey.A400',
                        '&.Mui-selected': {
                            color: 'grey.100',
                            bgcolor: open && isActiveTab ? 'grey.800' : 'grey.900',
                            borderRadius: '4px',
                        },
                        '&.Mui-selected:hover': {
                            bgcolor: 'grey.800',
                        },
                        "&:hover": { bgcolor: activeTheme ? "grey.900" : "grey.500" }
                    }}
                    selected={isActiveTab || hasSubTabs && pathname.includes(`/${tabValue}/${selectedSubTab}`) && !open}
                    onClick={() => {
                        if ((tab) === GET_STARTED) {
                            router.replace('/');
                        } else if (hasSubTabs) {
                            const firstSubTabPath = menuOptions[0].subTab.toLowerCase().replace(/[\s\W]+/g, '-');
                            router.replace(`/${tabValue}/${firstSubTabPath}`)
                        } else if (tab !== EXIT_APP) { router.replace(`/${tabValue}`) }
                    }}
                >

                    {isActiveTab ? iconSelect : icon}
                    <ListItemText sx={{ ml: 2, mr: 3 }} primary={tab} />
                    {hasSubTabs && <Chip sx={{ mr: 1 }} label={menuOptions.length} size="small" />}
                    {hasSubTabs && <Box
                        onClick={(e) => {
                            handleClick();
                            e.stopPropagation();
                        }}
                    >
                        {open && <ChevronUpIcon width="20px" color='grey.A700' />}
                        {!open && <ChevronDownIcon width="20px" color='grey.A700' />}
                    </Box>}
                    {tab === PROFILE_SETTINGS && <ChevronRightIcon width="20px" color='grey.A700' />}
                </ListItemButton>
            </ListItem >
            {hasSubTabs && <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {(menuOptions || []).map(({ subTab = '' }) => {
                        const subTabValue = subTab.toLowerCase().replace(/[\s\W]+/g, '-');
                        return (
                            <ListItem key={`${tabValue}-${subTabValue}`} disablePadding>
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
                                    selected={pathname.includes(`/${tabValue}/${subTabValue}`)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpen(true);
                                        setSelectedSubTab(subTabValue);
                                        router.replace(`/${tabValue}/${subTabValue}`)
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: '25px' }} />
                                    <ListItemText primary={subTabValue} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Collapse>}
        </Box >
    );
};

export default MenuListItem;