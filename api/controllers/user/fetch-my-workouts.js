var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch my workouts',


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

    let queryString = "SELECT my_workouts FROM users WHERE email= '"+inputs.email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        return exits.success()
        console.log("ERROR: " + error)
      } else {
        let myWorkouts = JSON.parse(result.rows[0]["my_workouts"])
        return exits.success(myWorkouts)
      }

    })
  }


};
