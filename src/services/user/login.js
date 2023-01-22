const clientDB = require("../../database");
var jwt = require("jsonwebtoken");

const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const querySql = `SELECT * FROM USUARIOS WHERE EMAIL='${email}' AND PASSWORD='${password}'`;
    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al traer el un post");

        throw err;
      }

      if (!result.rows.length) {
        res.status(404);
        res.send("no se ha encontrado el usuario");
        return;
      }

      var token = jwt.sign({ user: email }, "123");

      res.status(200);
      res.json({ token });

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = login;
