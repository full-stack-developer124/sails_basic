var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Get quote by id',


  description: '',


  inputs: {
    id: {
      type: 'number',
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
    let queryString = "SELECT * FROM motivational_quotes WHERE id='"+inputs.id+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
        return exits.success({error: error});
      } else {
        let quote = result.rows[0]
        console.log(quote);
        return exits.success(quote)
      }

    })
  }


};
