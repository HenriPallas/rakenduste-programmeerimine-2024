import { Box, List, ListItem, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

type Todo = {
  id: number;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>

      <Typography variant="h3">To-do list</Typography>

        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <Accordion expanded={expanded === `todo${todo.id}`} onChange={handleChange(`todo${todo.id}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="todo-content"
                  id="todo-header"
                >
                {todo.title}
                </AccordionSummary>
                <AccordionDetails>
                  <EditTodo todo={todo} fetchTodos={fetchTodos}/>
                  <DeleteTodo todoID={todo.id} fetchTodos={fetchTodos}/>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>

      <SubmitTodo fetchTodos={fetchTodos} />

    </Box>
  );
};

export default Todos;
