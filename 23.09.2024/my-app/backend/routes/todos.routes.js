const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const {
    todosRouteMiddleware,
    todosGetRouteMiddleware,
} = require("../middlewares/todos.middlewares");

router.use(todosRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", todosGetRouteMiddleware, todosController.read);
router.post("/", todosController.create);
router.put("/", todosController.update);
router.delete("/", todosController.delete);

module.exports = router;
