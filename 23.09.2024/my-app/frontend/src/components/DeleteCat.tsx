import { Box, Button } from "@mui/material";

type DeleteCatProp = {
    catID: string;
    fetchCats: () => void;
};

const DeleteCat = ({ catID, fetchCats }: DeleteCatProp) => {

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
        
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8080/cats`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: catID }),
                });
    
                if (response.ok) {
                    console.log("Entry deleted successfully");
                    fetchCats();
                } else {
                    console.error("Failed to delete the entry");
                }
            } catch (error) {
                console.error("Error deleting entry:", error);
          }
        }
    };

    return (
        <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <Button onClick={handleDelete}>Delete</Button>
        </Box>
    );
};

export default DeleteCat;