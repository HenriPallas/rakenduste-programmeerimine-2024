import { Stack, Box, Grid2, Paper } from "@mui/material";
import Header from "./Appbar";
import Cats from "./Cats";
import Todos from "./Todos";
import EventListener from "./Eventlistener";

const Sitecontent = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid2 container spacing={2}>
                <Header />
                <Grid2 size={12}>
                    <Stack gap={2}>
                        <Paper>
                            <Cats />
                        </Paper>
                        <Paper>
                            <Todos />
                        </Paper>
                        <EventListener />
                    </Stack>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Sitecontent;
