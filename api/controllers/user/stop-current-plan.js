var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Stop current plan',


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
    let email = inputs.email
    let queryString = "UPDATE users SET current_plan='"+JSON.stringify({})+"' WHERE email='"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'success'})
      }
    })

  }


};
