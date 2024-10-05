import { Button } from "@mui/material";
import React, { useState } from "react";
import Cleanup from "./Cleanup";


const EventListener = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && <Cleanup />}
            <Button variant="contained" onClick={() => setShow(!show)}>Toggle</Button>
        </>
    );
};

export default EventListener
