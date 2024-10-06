const todos = [
    {
      id: 1,
      title: "Do homework",
      priority: 1,
      createdAt: 1727098800585,
      updatedAt: null,
      deleted: false,
    },
    {
      id: 2,
      title: "Find a job",
      priority: 2,
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: false,
    },
    {
      id: 3,
      title: "Test",
      priority: 3,
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: true,
    },
  ];
  
  exports.create = (req, res) => {
    console.log("creator triggered!")
    const { title, priority } = req.body;
  
    if (!title || title === "") {
      return res
        .status(418)
        .send({ type: "Error", message: "Must include a title" });
    }
  
    const newTodo = {
      id: todos.length+1,
      title: title,
      priority: priority,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
  
    todos.push(newTodo);
  
    res.send(newTodo);
  };
  
  exports.read = (req, res) => {
    res.send(todos);
  };
  
  exports.update = (req, res) => {
    const { id, title, priority } = req.body;

    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return res
        .status(418)
        .send({ type: "Error", message: "Entry not found" });
    }

    todo.title = title !== undefined ? title : todo.title;
    todo.priority = priority !== undefined ? priority : todo.priority;
    todo.updatedAt = Date.now();

    res.send(todo);
  };
  
  exports.delete = (req, res) => {
    const { id } = req.body;

    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return res
        .status(418)
        .send({ type: "Error", message: "Entry not found" });
    }

    todo.deleted = true;

    res.send({todo});
  };