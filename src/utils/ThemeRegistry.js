'use client';
import { useState, createContext, useMemo, useContext } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

export default function ThemeRegistry(props) {
    const { options, children } = props;

    const [activeTheme, setActiveTheme] = useState(true);
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });
    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    // Toggle theme function
    const toggleTheme = () => {
        setActiveTheme((prev) => !prev);
    };

    // Create theme based on current theme mode
    const theme = useMemo(
        () => createTheme({
            typography: {
                fontFamily: "'var(--font-inter)', Arial, sans- serif",
                button: {
                    textTransform: 'none'
                }
            },
            palette: {
                mode: activeTheme ? 'dark' : 'light',
                white: {
                    main: activeTheme ? '#FFFFFF' : '#000000',
                },
                black: {
                    main: activeTheme ? '#000000' : '#FFFFFF',
                },
                tonalOffset: {
                    light: activeTheme ? '#0A0A0A' : '#eeeeee',
                    dark: activeTheme ? '#080808' : '#f5f5f5',
                },
            },
        }),
        [activeTheme]
    );


    return (
        <CacheProvider value={cache}>
            <ThemeContext.Provider value={{ toggleTheme, activeTheme }}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </MuiThemeProvider>
            </ThemeContext.Provider>
        </CacheProvider>
    );
}