var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch user profile completed',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      message: "Fetched trainers successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let email = inputs.email;

    let queryString = "SELECT completedConfig FROM users where email= '"+inputs.email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        let completedConfig = result.rows[0]["completedConfig"]
        exits.success(completedConfig)
      }

    })
  }


};
