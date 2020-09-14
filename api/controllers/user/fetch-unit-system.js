var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch unit system',


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
    let email = inputs.email;

    let queryString = "SELECT unitSystem FROM users where email= " + email

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success({
          data: result.rows[0],
          message: "Successfully Fetched Personal Trainers"
        })
        console.log("ROWS: " + JSON.stringify(result.rows))
      }

    })
  }


};
