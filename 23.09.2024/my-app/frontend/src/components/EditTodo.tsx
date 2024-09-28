import { Box, Button, Stack, TextField, Input } from "@mui/material";
import React, { useState, useEffect } from "react";

type Todo = {
    id: number;
    title: string;
    priority: number;
    createdAt: number;
    updatedAt: number | null;
    deleted: boolean;
  };

type EditTodoProps = {
    todo: Todo;
    fetchTodos: () => void;
};

const EditTodo = ({ todo, fetchTodos }: EditTodoProps) => {

    const [title, setTitle] = useState(todo.title);
    const [priority, setPriority] = useState(todo.priority);

    useEffect(() => {
        if (todo) {
          setTitle(todo.title);
          setPriority(todo.priority);
        }
    }, [todo]);

    const EditTodo = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos", {
          method: "PUT",
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
  
      EditTodo();
      setTimeout(fetchTodos, 100);
    };

    return (
        <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <form onSubmit={handleSubmit}>
                <Stack gap={2}>
                    <TextField
                        label="To-do title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <TextField 
                        label="Priority"
                        type="number"
                        value={priority}
                        onChange={(event) => setPriority(Number(event.target.value))}
                        inputProps={{ 
                            min: 0 
                        }}
                    />
                    
                    <TextField
                        label="Created At"
                        value={new Date(todo.createdAt).toLocaleString()}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        label="Updated At"
                        value={todo.updatedAt ? new Date(todo.updatedAt).toLocaleString() : "Never updated"}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField 
                        label="ID"
                        type="number"
                        value={todo.id}
                        inputProps={{ 
                            readOnly: true,
                        }}
                    />

                    <Button type="submit">Edit</Button>
                </Stack>
            </form>
        </Box>
    );
};

export default EditTodo;