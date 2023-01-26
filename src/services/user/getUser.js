const clientDB = require("../../database");
var jwt = require("jsonwebtoken");

const getNotes = (req, res) => {
  const { headers } = req;
  try {
    const bearerHeader = req.header("Authorization").split(" ");
    console.log("autorizacion", headers["authorization"]);
    const bearerToken = bearerHeader[1];

    console.log("bearerToken: " + bearerToken);
    jwt.verify(bearerToken, "123", function (err, decoded) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al traer el un post");

        throw err;
      }
      const querySql = `SELECT * FROM USUARIOS WHERE EMAIL='${decoded.user}' `;
      clientDB.query(querySql, function (err, result) {
        if (err) {
          console.log("[ERROR]:\n" + err);
          res.status(400);
          res.send("hubo un error con el token");

          throw err;
        }
        res.status(200);
        res.json(result.rows[0]);
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
