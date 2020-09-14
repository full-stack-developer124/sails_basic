var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch workouts by musclegroups',


  description: '',


  inputs: {
    musclegroups: {
      type: 'ref',
      required: true
    },
    count: {
      type: 'number',
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

    let limit = inputs.count
    let offset = inputs.offset

    let queryString = "SELECT * FROM workouts WHERE "
    let musclegroups = inputs.musclegroups

    musclegroups.forEach((musclegroup, i) => {
      if (i == 0) {
        if (musclegroups.length == 1) {
          queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"')"
        } else {
          queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
        }
      } else if (i == musclegroups.length - 1) {
        queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"')"
      } else {
        queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
      }
    });

    queryString = queryString + " ORDER BY date DESC LIMIT "+limit+" OFFSET "+offset+""

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows)
      }
    })

    // All done.
    return;

  }


};
