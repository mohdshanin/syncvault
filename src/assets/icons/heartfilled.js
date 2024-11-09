'use client'
import React from 'react';

export default function HeartFilledIcon(props) {
    const { pathProps, ...rest } = props;

    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path d="M4.31802 6.798C2.56066 8.55536 2.56066 11.4046 4.31802 13.162L12.0001 20.844L19.682 13.162C21.4393 11.4046 21.4393 8.55536 19.682 6.798C17.9246 5.04064 15.0754 5.04064 13.318 6.798L12.0001 8.11607L10.682 6.798C8.92462 5.04064 6.07538 5.04064 4.31802 6.798Z"
                fill="#E9004C"
                stroke="#E9004C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                {...pathProps}
            />
        </svg>
    );
}

