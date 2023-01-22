const clientDB = require("../../database");

const createNote = (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;

    const querySql = `INSERT INTO usuarios(EMAIL, PASSWORD, ROL, LENGUAGE) VALUES ('${email}', '${password}', '${rol}', '${lenguage}')`;
    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al crear el un usuario");

        throw err;
      }

      res.status(201);
      res.json(req.body);

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = createNote;
