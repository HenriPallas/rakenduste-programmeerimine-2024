import { Box, List, ListItem, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import EditCat from "./EditCat";
import DeleteCat from "./DeleteCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>

      <Typography variant="h3">Cats</Typography>

        <List>
          {cats.map((cat) => (
            <ListItem key={cat.id}>
              <Accordion expanded={expanded === `cat${cat.id}`} onChange={handleChange(`cat${cat.id}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="todo-content"
                  id="todo-header"
                >
                {cat.name}
                </AccordionSummary>
                <AccordionDetails>
                  <EditCat cat={cat} fetchCats={fetchCats}/>
                  <DeleteCat catID={cat.id} fetchCats={fetchCats}/>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>

      <SubmitCat fetchCats={fetchCats} />

    </Box>
  );
};

export default Cats;
