import * as NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";



export default function MyWallet() {
    return (
        <Box>
            <Box>My Wallet</Box>
            <Link component={NextLink} href="/">TO HOME PAGE</Link>
        </Box>
    );
}