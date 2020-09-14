var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch workout by trainer id',


  description: '',


  inputs: {
      trainerId: {
        type: "string",
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
    let trainerId = inputs.trainerId;

    let queryString = "SELECT * FROM workouts WHERE personalTrainerId= '"+trainerId+"' ORDER BY date DESC"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success(result.rows)
      }

    })
  }


};
