var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update users name',


  description: '',


  inputs: {
    unitSystem: {
      type: 'number',
      required: true
    },
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
    let email = inputs.email;
    let unitSystem = inputs.unitSystem

    let queryString = "UPDATE users SET unitSystem='"+unitSystem+"' WHERE email= " + "'"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'Success'})
      }
    })
  }


};
