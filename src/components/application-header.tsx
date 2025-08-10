import { AppBar, Box, Toolbar } from "@mui/material";

export function ApplicationHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'silver' }}>
                <Toolbar>
                    <img src="/acme-logo.png" alt="logo" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}