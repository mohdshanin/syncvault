'use client'
import React from 'react';

export default function HeartBorderIcon(props) {
    const { pathProps, ...rest } = props;

    return (
        <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path d="M2.31802 2.798C0.56066 4.55536 0.56066 7.4046 2.31802 9.16196L10.0001 16.844L17.682 9.16196C19.4393 7.4046 19.4393 4.55536 17.682 2.798C15.9246 1.04064 13.0754 1.04064 11.318 2.798L10.0001 4.11607L8.68198 2.798C6.92462 1.04064 4.07538 1.04064 2.31802 2.798Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                {...pathProps}
            />
        </svg>
    );
}

