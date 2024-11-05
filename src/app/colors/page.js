'use client'
import { Box } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import React from 'react'

function Colors() {
    const theme = useTheme()
    return (<Box display='flex' position='relative' width='100%' height='fit-content' flexWrap='wrap' justifyContent='center'>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[100]}>{theme.palette.grey[100]}-grey[100]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[200]}>{theme.palette.grey[200]}-grey[200]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[300]}>{theme.palette.grey[300]}-grey[300]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[400]}>{theme.palette.grey[400]}-grey[400]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[500]}>{theme.palette.grey[500]}-grey[500]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[600]}>{theme.palette.grey[600]}-grey[600]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[700]}>{theme.palette.grey[700]}-grey[700]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[800]}>{theme.palette.grey[800]}-grey[800]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey[900]}>{theme.palette.grey[900]}-grey[900]</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey.A100}>{theme.palette.grey.A100}-grey-A100</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey.A200}>{theme.palette.grey.A200}-grey-A200</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey.A400}>{theme.palette.grey.A400}-grey-A400</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.grey.A700}>{theme.palette.grey.A700}-grey-A700</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.background.default}>{theme.palette.background.default}-background-default</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.background.paper}>{theme.palette.background.paper}-background-paper</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.text.disabled}>{theme.palette.text.disabled}-text-disabled</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.text.primary}>{theme.palette.text.primary}-text-primary</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.text.secondary}>{theme.palette.text.secondary}-text-secondary</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.common.black}>{theme.palette.common.black}-common-black</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.common.white}>{theme.palette.common.white}-common-white</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.warning.contrastText}>{theme.palette.warning.contrastText}-warning-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.warning.main}>{theme.palette.warning.main}-warning-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.warning.dark}>{theme.palette.warning.dark}-warning-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.warning.light}>{theme.palette.warning.light}-warning-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.error.contrastText}>{theme.palette.error.contrastText}-error-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.error.main}>{theme.palette.error.main}-error-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.error.dark}>{theme.palette.error.dark}-error-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.error.light}>{theme.palette.error.light}-error-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.info.contrastText}>{theme.palette.info.contrastText}-info-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.info.main}>{theme.palette.info.main}-info-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.info.dark}>{theme.palette.info.dark}-info-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.info.light}>{theme.palette.info.light}-info-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.primary.contrastText}>{theme.palette.primary.contrastText}-primary-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.primary.main}>{theme.palette.primary.main}-primary-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.primary.dark}>{theme.palette.primary.dark}-primary-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.primary.light}>{theme.palette.primary.light}-primary-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.secondary.contrastText}>{theme.palette.secondary.contrastText}-secondary-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.secondary.main}>{theme.palette.secondary.main}-secondary-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.secondary.dark}>{theme.palette.secondary.dark}-secondary-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.secondary.light}>{theme.palette.secondary.light}-secondary-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.success.contrastText}>{theme.palette.success.contrastText}-success-contrastText</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.success.main}>{theme.palette.success.main}-success-main</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.success.dark}>{theme.palette.success.dark}-success-dark</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.success.light}>{theme.palette.success.light}-success-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.tonalOffset.light}>{theme.palette.tonalOffset.light}-tonalOffset-light</Box>
        <Box width='150px' height='150px' border='2px solid purple' color='purple' bgcolor={theme.palette.tonalOffset.dark}>{theme.palette.tonalOffset.dark}-tonalOffset-dark</Box>
    </Box>
    )
}

export default Colors
