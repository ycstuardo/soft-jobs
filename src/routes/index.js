const notesRoutes = require("./user");

const middlewares = (app) => {
  app.use("/api", notesRoutes);
};

module.exports = middlewares;
