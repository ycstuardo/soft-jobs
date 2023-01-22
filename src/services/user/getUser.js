const clientDB = require("../../database");
var jwt = require("jsonwebtoken");

const getNotes = (req, res) => {
  const { headers } = req;

  const bearerHeader = headers["authorization"].split(" ");
  const bearerToken = bearerHeader[0];

  try {
    const querySql = `SELECT * FROM USUARIOS`;
    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error con el token");

        throw err;
      }

      jwt.verify(bearerToken, "123", function (err, decoded) {
        if (err) {
          console.log("[ERROR]:\n" + err);
          res.status(400);
          res.send("hubo un error al traer el un post");

          throw err;
        }

        res.status(200);
        res.json(result.rows);
        // err
        // decoded undefined
      });

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = getNotes;
