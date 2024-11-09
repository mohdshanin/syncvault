'use client'
import React from 'react';

export default function BarChartIcon(props) {
    const { ...rest } = props;

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
            <g clip-path="url(#clip0_267_3282)">
                <rect x="8" y="7.5" width="3" height="18" fill="black" />
                <rect x="12" y="21.5" width="3" height="4" fill="black" />
                <rect x="16" y="11.5" width="3" height="14" fill="black" />
                <rect x="20" y="21.5" width="3" height="4" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_267_3282">
                    <rect width="28" height="28" fill="white" transform="translate(2 2.5)" />
                </clipPath>
            </defs>
        </svg>
    );
}

