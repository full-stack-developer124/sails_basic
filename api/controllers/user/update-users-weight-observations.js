var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update users weight observations',

  description: '',

  inputs: {
    email: {
      type: 'string',
      required: true
    },
    observations: {
      type: 'ref',
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
    var observations = JSON.stringify(inputs.observations)
    var email = inputs.email

    let queryString = "UPDATE users SET weight='"+observations+"' WHERE email= " + "'"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'success'})
      }
    })
  }


};
