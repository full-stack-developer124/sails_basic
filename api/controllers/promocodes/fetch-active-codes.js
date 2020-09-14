var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch active codes',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      message: "Fetched trainers successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let email = inputs.email;

    let queryString = "SELECT * FROM promocodes"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success(result.rows)
        console.log(result)
      }
    })
  }


};
