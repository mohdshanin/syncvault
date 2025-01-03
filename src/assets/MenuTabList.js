'use client';
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

export const SidebarTabs = {
    GetStarted: [
        {
            tab: GET_STARTED,
            icon: <HomeIcon width="24px" />,
            iconSelect: <HomeIconSolid width="24px" />,
        },
    ],
    Web2: [
        {
            tab: USE_EARN,
            icon: <BoltIcon width="24px" />,
            iconSelect: <BoltIconSolid width="24px" />,
            subHeader: 'Web3',
        },
        {
            tab: CLAIM_FREE_MUSIC,
            icon: <MusicalNoteIcon width="24px" />,
            iconSelect: <MusicalNoteIconSolid width="24px" />,
        },
    ],
    Web3: [
        {
            tab: QUESTS,
            icon: <PuzzlePieceIcon width="24px" />,
            iconSelect: <PuzzlePieceIconSolid width="24px" />,
            subHeader: 'Web3',
        },
        {
            tab: STAKING_POOLS,
            icon: <FireIcon width="24px" />,
            iconSelect: <FireIconSolid width="24px" />,
        },
        {
            tab: VOTING_POLLS,
            icon: <ServerStackIcon width="24px" />,
            iconSelect: <ServerStackIconSolid width="24px" />,
        },
    ],
    Toolbar: [
        {
            tab: MY_PARTICIPATIONS,
            icon: <TicketIcon width="24px" />,
            iconSelect: <TicketIconSolid width="24px" />,
            subHeader: 'ToolBar',
        },
        {
            tab: ARTIST_TOOLS,
            icon: <SparklesIcon width="24px" />,
            iconSelect: <SparklesIconSolid width="24px" />,
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
            icon: <VideoCameraIcon width="24px" />,
            iconSelect: <VideoCameraIconSolid width="24px" />,
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
            icon: <MapIcon width="24px" />,
            iconSelect: <MapIconSolid width="24px" />,
            menuOptions: [
                {
                    subTab: DASHBOARD,
                },
                {
                    subTab: CHALLENGES,
                },
            ],
        },],
    Settings: [
        {
            tab: PROFILE_SETTINGS,
            icon: <UserIcon width="24px" />,
            iconSelect: <UserIconSolid width="24px" />,

        },
        {
            tab: EXIT_APP,
            icon: <ArrowLeftEndOnRectangleIcon width="24px" />
        },
    ]
};