const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos.controller");
const { check, validationResult } = require("express-validator");

const {
    todosRouteMiddleware,
    todosGetRouteMiddleware,
    signToken,
    verifyToken,
} = require("../middlewares/todos.middlewares");

router.use(todosRouteMiddleware);

router.get("/", todosGetRouteMiddleware, todosController.read);

router.post("/", 
    [
        check("title", "Title is required").not().isEmpty(),
        check("priority", "Priority should be a number").isNumeric(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    todosController.create);

router.put("/", 
    [
        check("id", "Id is required and should be a number").isNumeric(),
        check("title").optional().not().isEmpty().withMessage("Title is required"),
        check("priority").optional().isNumeric().withMessage("Priority should be a number"),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            console.log("update error");
            return res.status(400).json({ errors: errors.array() });
        }
        console.log("Move to next");
        next();
    }, 
    todosController.update);

router.delete("/",
    [
        check("id", "Id is required and should be a number").isNumeric(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            console.log("update error");
            return res.status(400).json({ errors: errors.array() });
        }
        console.log("Move to next");
        next();
    }, 
    todosController.delete);

router.get("/token", signToken);

router.post("/verify", verifyToken);

module.exports = router;
