const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const jwt = require("jsonwebtoken");
const {
    todosRouteMiddleware,
    todosGetRouteMiddleware,
    signToken,
    verifyToken,
} = require("../middlewares/todos.middlewares");

router.use(todosRouteMiddleware);

router.get("/", todosGetRouteMiddleware, todosController.read);
router.post("/", todosController.create);
router.put("/", todosController.update);
router.delete("/", todosController.delete);

router.get("/token", signToken);

router.post("/verify", verifyToken);

module.exports = router;
