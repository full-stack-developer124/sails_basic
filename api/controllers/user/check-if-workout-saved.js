var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Check if workout saved',


  description: '',


  inputs: {
    workoutId: {
      type: 'string',
      required: true
    },
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
    let email = inputs.email
    console.log(inputs.workoutId);
    let workoutId = inputs.workoutId

    let queryString = "SELECT (JSON_EXTRACT(saved_workouts, '$.\""+workoutId+"\"') IS NOT NULL) FROM users"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows[0])
      }
    })
  }


};
