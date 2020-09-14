var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch users weekday workouts',


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

    let queryString = "SELECT week FROM users where email= '"+inputs.email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        let week = JSON.parse(result.rows[0]["week"])
        return exits.success(week)
      }

    })
  }


};
