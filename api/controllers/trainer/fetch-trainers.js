var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch trainers',


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

    let queryString = "SELECT * FROM personal_trainers"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows)
      }

    })

  }


};
