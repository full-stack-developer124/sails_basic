var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Get current workout plan',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      message: "Updated Unit system successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let email = inputs.email
    let queryString = "SELECT current_plan FROM users WHERE email='"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        let currentPlan = JSON.parse(result.rows[0]["current_plan"])
        exits.success(currentPlan)
      }
    })
  }


};
