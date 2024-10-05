import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Header = () => {
    return (
        <Box position="static">
            <AppBar>
                <Toolbar>
                    <Box>
                        <Button>Cats</Button>
                        <Button>Tasks</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
export default Header