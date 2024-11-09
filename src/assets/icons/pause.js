'use client'
import React from 'react';

export default function PauseIcon(props) {
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
            <rect y="0.5" width="32" height="32" rx="8" fill="#E9004C" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 23.5V9.5H13V23.5H11ZM19 23.5V9.5H21V23.5H19Z"
                fill="#FDFDFD"
                {...pathProps}
            />
        </svg>
    );
}

