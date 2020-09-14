var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'User workout statistics',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      message: "Fetched users data successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let email = inputs.email;

    let queryString = "SELECT data FROM users where email= '"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        if (result.rows[0]) {
          let data = JSON.parse(result.rows[0]["data"])
          console.log(data);
          return exits.success(data)
        } else {
          return exits({message: 'no data'})
        }
      }

    })
  }


};
