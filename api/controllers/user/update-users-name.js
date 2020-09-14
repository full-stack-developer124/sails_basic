var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update users name',


  description: '',


  inputs: {
    name: {
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
      message: "Updated Unit system successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let email = inputs.email;
    let name = inputs.name;

    let queryString = "UPDATE users SET name='"+name+"' WHERE email= " + "'"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'Success'})
      }
    })
  }


};
