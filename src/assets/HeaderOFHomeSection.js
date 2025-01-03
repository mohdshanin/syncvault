'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import { spaceGrotesk } from '../utils/fonts';

export default function HeaderOFHomeSection({ title = '', description = '', buttonText = '' }) {
    return (
        <Box
            sx={{
                display: 'flex',
                pt: 15,
                pl: 5,
                pb: 8,
                width: '100%',
                backgroundColor: "tonalOffset.light",
                justifyContent: 'center',
            }}
        >
            {(description || buttonText)
                ? <Box
                    width={'60%'}
                    pr={35}
                    className={spaceGrotesk.className}
                    fontSize={56} component="h2"
                    mb={2.5}
                    lineHeight={1.1}
                    sx={{ fontWeight: 'medium' }}>
                    {title}
                </Box>
                : <Box
                    className={spaceGrotesk.className}
                    fontSize={56}
                    component="h2"
                    mb={2.5}
                    lineHeight={1.1}
                    sx={{ fontWeight: 'medium' }}>
                    {title}
                </Box>}
            {(description || buttonText) && <Box width={'40%'} textAlign={'left'}>
                {description && <Typography variant="body1" sx={{ maxWidth: '450px', marginBottom: 4 }}>
                    {description}
                </Typography>}
                {buttonText && <Button
                    variant="outlined"
                    endIcon={<ArrowLongRightIcon width={24} />}
                    size='large'
                    sx={{
                        py: 1.5,
                        fontWeight: 'bold',
                        fontSize: 'large',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '4px',
                        color: 'grey.100',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.7)',
                        },
                    }}
                >
                    {buttonText}
                </Button>}
            </Box>}
        </Box>
    );
}
