import { Box, Button, Stack, TextField, Input } from "@mui/material";
import React, { useState, useEffect } from "react";

type Cat = {
    id: string,
    name: string,
    createdAt: number,
    updatedAt: number | null,
    deleted: boolean,
  };

type EditCatProps = {
    cat: Cat;
    fetchCats: () => void;
};

const EditCat = ({ cat, fetchCats }: EditCatProps) => {

    const [name, setName] = useState(cat.name);

    useEffect(() => {
        if (cat) {
          setName(cat.name);
        }
    }, [cat]);

    const EditCat = async () => {
      try {
        const response = await fetch("http://localhost:8080/cats", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name }),
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
  
      EditCat();
      setTimeout(fetchCats, 100);
    };

    return (
        <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <form onSubmit={handleSubmit}>
                <Stack gap={2}>
                    <TextField
                        label="Cat name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    
                    <TextField
                        label="Created At"
                        value={new Date(cat.createdAt).toLocaleString()}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        label="Updated At"
                        value={cat.updatedAt ? new Date(cat.updatedAt).toLocaleString() : "Never updated"}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField 
                        label="ID"
                        value={cat.id}
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

export default EditCat;