import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const TodoVerify = () => {
    const [token, setToken] = useState();

    const fetchToken = async () => {
        const response = await fetch("http://localhost:8080/todos/token");
        const data = await response.json();
        console.log(data);
        setToken(data.token);
    };

    const verifyToken = async () => {
        try {
          const response = await fetch("http://localhost:8080/todos/verify", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
          });
    
          if (response.ok) {
            console.log("Success", response);
            window.confirm("Token verified successfully!");
          } else {
            console.warn("No success");
            window.confirm("Could not verify the token!");
          }
        } catch (error) {
          console.warn(error);
          window.confirm("An error occurred!");
        }
      };
    
    useEffect(() => {
        fetchToken();
    }, []);

    return(
        <>
            <Button variant="contained" onClick={fetchToken}>Sign New Token</Button>
            <Button variant="contained" onClick={verifyToken}>Verify Token</Button>
        </>
    );
};

export default TodoVerify;