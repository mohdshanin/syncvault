'use client'
import React, { useState } from 'react';
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function InformationBanner({ typeNotice = false, title = 'Some important informaiton', path = '' }) {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: typeNotice ? 'space-between' : 'center',
                py: 1,
                px: 4,
                background: 'linear-gradient(90deg, #8a0032, #4a0032)',
                color: 'grey.100',
                width: '100%',
                borderRadius: typeNotice ? 0 : 1,
            }}
        >
            <Typography variant="body2" sx={{ display: 'flex', fontSize: '1rem', py: 1 }}>
                {title}
                {path && <Link ml={1} color='inherit' underline='always' component={NextLink} href={path}>click here.</Link>}
            </Typography>
            {typeNotice && <IconButton onClick={handleClose} sx={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'grey.100',
                width: '40px',
                height: '40px',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                },
            }}>
                <XMarkIcon width={24} />
            </IconButton>}
        </Box >
    );
};

