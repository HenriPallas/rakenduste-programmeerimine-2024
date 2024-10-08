import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitTodoProps = {
    fetchTodos: () => void;
};

const SubmitTodo = ({fetchTodos}: SubmitTodoProps) => {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(0);

    const SubmitTodo = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title, priority: priority }),
        });
  
        if (response.ok) {
          console.log("Success", response);
          // Snackbar success
        } else {
          console.warn("No success");
          // Snackbar
        }
      } catch (error) {
        console.warn(error);
      }
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
  
      SubmitTodo();
      setTimeout(fetchTodos, 100);
    };

    return (
        <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <form onSubmit={handleSubmit}>
                <Stack>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Stack>
                      <TextField
                          label="To-do title"
                          onChange={(event) => setTitle(event.target.value)}
                      />

                      <TextField 
                          label="Priority"
                          type="number"
                          onChange={(event) => setPriority(Number(event.target.value))}
                          inputProps={{ 
                              min: 0 
                          }}
                      />
                    </Stack>
                  </Box>
                    <Button type="submit">Add</Button>
                </Stack>
            </form>
        </Box>
    );
};

export default SubmitTodo;