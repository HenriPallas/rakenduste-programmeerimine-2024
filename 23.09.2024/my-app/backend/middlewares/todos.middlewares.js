const jwt = require("jsonwebtoken");

const tokenPass = "sssh"

  const todosRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  };
  
  const todosGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware");
    next();
  };

  const getToken = (req, res, next) => {
    const { token } = req.body;
    if (!token){
      return res.status(400).send("No token");
    }
    
    jwt.verify(token, tokenPass, function(err, decoded){
      if (err) {
        return res.status(401).send("Invalid token");  // Invalid token response
      }
      console.log(decoded.title);

      next();
    })
  }

  const signToken = (req, res) => {
    const name = "Name";
    const person = { name: name };

    const signedToken = jwt.sign(person, tokenPass, { expiresIn: '1h' });
    console.log(signedToken);
    res.json({ token: signedToken });
  };

  const verifyToken = (req, res) => {
    const { token } = req.body;

    if (!token){
      return res.status(400).send("No token");
    }
    
    jwt.verify(token, tokenPass, function(err, decoded){
      if (err) {
        return res.status(401).send("Invalid token");  // Invalid token response
      }
      console.log(decoded);
      res.json({ message: "Token is valid", decoded });
    })
  };
  
  module.exports = { 
    todosRouteMiddleware, 
    todosGetRouteMiddleware, 
    signToken, 
    verifyToken 
  };