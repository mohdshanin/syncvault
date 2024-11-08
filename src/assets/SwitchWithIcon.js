'use client';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { styled } from '@mui/material/styles';
import Switch from "@mui/material/Switch";


import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/outline'


const convertSvg = (svg) => {
    const markup = renderToStaticMarkup(svg);
    const encoded = encodeURIComponent(markup);
    const dataUri = `url('data:image/svg+xml;utf8,${encoded}')`;
    return dataUri;
};


export const SwitchWithIcons = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: theme.palette.white.main,
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: convertSvg(<MoonIcon color={theme.palette.black.main} />),
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.grey.A400,
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.palette.grey.A700,
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.white.main,
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: convertSvg(<SunIcon color={theme.palette.black.main} />),
        },
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.white.main,
        }),
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        borderRadius: 20 / 2,
        backgroundColor: theme.palette.grey.A400,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey.A700,
        }),
    },
}));