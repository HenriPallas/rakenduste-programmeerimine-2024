import { Box, Button } from "@mui/material";

type DeleteTodoProps = {
    todoID: number;
    fetchTodos: () => void;
};

const DeleteTodo = ({ todoID, fetchTodos }: DeleteTodoProps) => {

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
        
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8080/todos/${todoID}`, {
                method: "DELETE",
                });
    
                if (response.ok) {
                    console.log("Entry deleted successfully");
                    fetchTodos();
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

export default DeleteTodo;