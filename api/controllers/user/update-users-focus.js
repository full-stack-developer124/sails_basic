var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update users focus',


  description: '',


  inputs: {
    focus: {
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
    let focus = inputs.focus;

    let queryString = "UPDATE users SET focus='"+focus+"' WHERE email= " + "'"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'Success'})
      }
    })
  }


};
