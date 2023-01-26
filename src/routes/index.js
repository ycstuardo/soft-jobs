const notesRoutes = require("./user");

const middlewares = (app) => {
  app.use("/", notesRoutes);
};

module.exports = middlewares;
