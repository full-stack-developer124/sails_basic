var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Start workout plan',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true
    },
    dateStarted: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      message: "Updated Unit system successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {

    let plan = JSON.stringify({id: inputs.id, dateStarted: inputs.dateStarted, completedComponents: ['starterId']})
    let email = inputs.email
    let queryString = "UPDATE users SET current_plan ='"+plan+"' WHERE email='"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'success'})
      }
    })

    // All done.
    return;

  }


};
