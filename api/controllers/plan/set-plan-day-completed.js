var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Set plan day completed',


  description: '',


  inputs: {
    dayId: {
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
    console.log("THIS IS IT!!");
    let email = inputs.email
    let dayId = inputs.dayId
    let queryString = "UPDATE users SET current_plan = JSON_ARRAY_APPEND(current_plan, '$.completedComponents', '"+dayId+"') WHERE email='"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        console.log("SUCCESS!");
        return exits.success({message: 'success'})
      }
    })

    // All done.
    return;

  }


};
