'use client'
import React, { useRef, useState } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import {
    Box,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from '@mui/material';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';


function SearchInput() {
    const theme = useTheme();
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([
        { text: 'Content ID (feature)', isHistory: true },
        { text: 'Contradiction (track)', isHistory: true },
        { text: 'cotton candy (track)', isHistory: false },
        { text: 'conking (artist)', isHistory: false },
    ]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
    };

    const handleDeleteHistory = (index) => {
        setSuggestions((prevSuggestions) =>
            prevSuggestions.filter((_, i) => i !== index)
        );
    };

    const handleSuggestionClick = (text) => {
        setInputValue(text);
    };

    const handleFocusInput = () => {
        // This will focus the InputBase component
        inputRef.current.focus();
    };

    return (
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', flexGrow: 1, }}>
            {/* Input Field */}
            <Box
                sx={{
                    display: 'flex',
                    bgcolor: inputValue ? 'grey.900' : 'black.main',
                    alignItems: 'center',
                    width: '100%',
                    pl: 2,
                    cursor: 'text',
                    '&:hover': {
                        bgcolor: "grey.900",
                    }
                }}
                onClick={handleFocusInput}
            >
                <IconButton sx={{ color: 'grey.A400', cursor: 'default' }} disableRipple>
                    <MagnifyingGlassIcon width={24} />
                </IconButton>
                <InputBase
                    inputRef={inputRef}
                    placeholder="Search…"
                    value={inputValue}
                    onChange={handleInputChange}
                    sx={{
                        flex: 1,
                        color: 'grey.100',
                        height: '72px',
                        'input::placeholder': {
                            color: 'grey.A400',
                            opacity: 1
                        }
                    }}
                />
                {inputValue && (
                    <IconButton onClick={handleClearInput} sx={{ color: 'grey.A400' }}>
                        <XMarkIcon width={24} />
                    </IconButton>
                )}
            </Box>

            {/* Suggestions List */}
            {inputValue && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'black.main',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <List>
                        {suggestions.map((suggestion, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        color: 'grey.A400',
                                        paddingY: 2,
                                        paddingX: 3,
                                        '&:hover': { backgroundColor: 'grey.900' },
                                    }}
                                    onClick={() => handleSuggestionClick(suggestion.text)}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ListItemIcon sx={{ minWidth: '30px', color: 'white', mr: 1 }}>
                                            {suggestion.isHistory ? (
                                                <ClockIcon width={24} color={theme.palette.grey.A400} />
                                            ) : (
                                                <MagnifyingGlassIcon width={24} color={theme.palette.grey.A400} />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={suggestion.text} />
                                    </Box>
                                    {suggestion.isHistory && (
                                        <IconButton
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteHistory(index);
                                            }}
                                            sx={{ color: 'white' }}
                                        >
                                            <TrashIcon width={20} color={theme.palette.grey.A400} />
                                        </IconButton>
                                    )}
                                </ListItem>
                                {index < suggestions.length - 1 && <Divider sx={{ bgcolor: 'background.paper' }} />}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default SearchInput;
