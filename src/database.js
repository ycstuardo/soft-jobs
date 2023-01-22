const { Client } = require("pg");

const connectionData = {
  host: "localhost",
  user: "postgres",
  database: "softjobs",
  password: "mono1039",
  port: 5432,
};

const clientDB = new Client(connectionData);

module.exports = clientDB;
