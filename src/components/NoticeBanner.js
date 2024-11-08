'use client'
import React, { useState } from 'react';
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/solid';

function NoticeBanner() {
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
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(90deg, #8a0032, #4a0032)',
                color: 'grey.100',
                width: '100%'
            }}
        >
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                $5,000 Syncvault Esports Tournament Live. To participate in the tournament{' '}
                <Link color='inherit' underline='always' component={NextLink} href="/my-wallet">click here.</Link>
            </Typography>
            <IconButton onClick={handleClose} sx={{
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
            </IconButton>
        </Box >
    );
};

export default NoticeBanner;
