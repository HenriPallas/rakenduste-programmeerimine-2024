import { Box, List, ListItem, Typography, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material";
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

  const filteredCats = cats.filter(cat => !cat.deleted);

  const closeAccordion = () => {
    setExpanded(false);
  };

  return (
    <Box>

      <Stack gap={5}>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h3">Cats</Typography>
      </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <List>
            {filteredCats.map((cat) => (
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
                    <EditCat cat={cat} fetchCats={fetchCats} closeAccordion={closeAccordion}/>
                    <DeleteCat catID={cat.id} fetchCats={fetchCats}/>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
          </List>
        </Box>

      <SubmitCat fetchCats={fetchCats} />

      </Stack>

    </Box>
  );
};

export default Cats;
