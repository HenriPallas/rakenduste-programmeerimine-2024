import { Box, List, ListItem, Typography, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material";
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

  const filteredTodos = todos.filter(todo => !todo.deleted).sort((a, b) => b.priority - a.priority);

  const closeAccordion = () => {
    setExpanded(false);
  };

  return (
    <Box>

      <Stack gap={5}>

      <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
      <Typography variant="h3">To-do list</Typography>
      </Box>

        <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <List>
            {filteredTodos.map((todo) => (
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
                    <EditTodo todo={todo} fetchTodos={fetchTodos} closeAccordion={closeAccordion}/>
                    <DeleteTodo todoID={todo.id} fetchTodos={fetchTodos}/>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
          </List>
        </Box>
      
      <SubmitTodo fetchTodos={fetchTodos} />

      </Stack>

    </Box>
  );
};

export default Todos;
