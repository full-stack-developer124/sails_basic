var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch workouts',


  description: '',


  inputs: {
    count: {
      type: "number",
      required: true
    },
    offset: {
      type: 'number',
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
    let workoutCount = inputs.count.toString()
    let offset = inputs.offset.toString()

    let queryString = "SELECT * FROM workouts ORDER BY date DESC LIMIT "+workoutCount+" OFFSET "+offset+""

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows)
      }
    })

  }


};
