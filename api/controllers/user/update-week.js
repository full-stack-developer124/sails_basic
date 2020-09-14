var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update week',


  description: '',


  inputs: {
    week: {
      type: 'ref',
      required: true
    },
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    let email = inputs.email;
    let week = JSON.stringify(inputs.week)

    let queryString = "UPDATE users SET week='"+week+"' WHERE email= " + "'"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
      }
    })

    // All done.
    return;

  }


};
