var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Delete my workout',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    workoutId: {
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
      let workoutId = inputs.workoutId

      let queryString = "UPDATE users SET my_workouts = JSON_REMOVE(my_workouts, '$.\""+workoutId+"\"') WHERE email='"+email+"'";
      //let queryString = "UPDATE users SET saved_workouts=JSON_ARRAY_APPEND(saved_workouts, '$', CAST('"+workout+"' AS JSON)) WHERE email='"+email+"'"
      mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
        if (error) {
          console.log("ERROR: " + error)
        } else {
          return exits.success({message: "Successfully saved workout"})
        }
      })

    // All done.
    return;

  }


};
