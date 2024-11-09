'use client'
import React from 'react';

export default function PlayWhiteIcon(props) {
    const { pathProps, ...rest } = props;

    return (
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <rect y="0.5" width="32" height="32" rx="8" fill="#FDFDFD" />
            <path d="M11 24.5V8.5L24 16.7286L11 24.5Z"
                fill="black"
                {...pathProps}
            />
        </svg>
    );
}

