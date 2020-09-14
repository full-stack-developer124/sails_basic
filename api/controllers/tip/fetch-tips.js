var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch tips',


  description: '',


  inputs: {
    count: {
      type: "number",
      required: true
    }
  },


  exits: {
    success: {
      description: "Returns ok response from /api/responses/ok.js with json data",
      responseType: "okWithJSON"
    }

  },


  fn: async function (inputs, exits) {


    let tipsCount = inputs.count;

    let queryString = "SELECT * FROM tips LIMIT " + tipsCount.toString()

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows)
      }

    })

  }


};
