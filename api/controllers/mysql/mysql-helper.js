var client = module.exports = require('mysql').createConnection({
    host: "mysql_hosting_url",
    port: 3306,
    user: "user_name",
    password: "your_password",
    database: "database_name",
    charset: "utf8mb4"
});

client.connect();

module.exports = {


  friendlyName: 'Mysql helper',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
