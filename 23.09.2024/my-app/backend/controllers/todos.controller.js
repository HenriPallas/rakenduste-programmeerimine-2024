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
      priority: 1,
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: false,
    },
  ];
  
  exports.create = (req, res) => {
    const { title } = req.body;
  
    if (!title || title === "") {
      return res
        .status(418)
        .send({ type: "Error", message: "Must include a title" });
    }
  
    const newTodo = {
      id: todos.length+1,
      title: title,
      priority: 0,
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
  
  exports.update = (req, res) => {};
  
  exports.delete = (req, res) => {};