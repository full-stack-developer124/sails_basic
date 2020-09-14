var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Filter workouts',


  description: '',


  inputs: {
    musclegroups: {
      type: 'ref',
      required: true
    },
    minDuration: {
      type: 'number',
      required: true
    },
    maxDuration: {
      type: 'number',
      required: true
    },
    levels: {
      type: 'ref',
      required: true
    },
    trainers: {
      type: 'ref',
      required: true
    },
    equipment: {
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

    let musclegroups = inputs.musclegroups
    let minDuration = inputs.minDuration
    let maxDuration = inputs.maxDuration
    let levels = inputs.levels
    let trainers = inputs.trainers
    let equipment = inputs.equipment

    let limit = inputs.count
    let offset = inputs.offset

    var queryString = "SELECT * FROM workouts WHERE "

    levels.forEach((level, i) => {
      if (i == 0) {
        queryString = queryString + "(level='"+level+"' OR "
      } else if (i == levels.length - 1) {
        queryString = queryString + "level='"+level+"') AND "
      } else {
        queryString = queryString + "level='"+level+"' OR "
      }
    });

    trainers.forEach((trainer, i) => {
      if (i == 0) {
        queryString = queryString + "(personalTrainerId=\""+trainer+"\" OR "
      } else if (i == trainers.length - 1) {
        queryString = queryString + "personalTrainerId=\""+trainer+"\") AND "
      } else {
        queryString = queryString + "personalTrainerId=\""+trainer+"\" OR "
      }
    });

    queryString = queryString + "duration >= '"+minDuration+"' AND duration <= '"+maxDuration+"' AND "

    musclegroups.forEach((musclegroup, i) => {
      if (i == 0) {
        if (musclegroups.length == 1) {
          if (equipment.length == 0) {
            queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"')"
          } else {
            queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
          }
        } else {
          queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
        }
      } else if (i == musclegroups.length - 1) {
        if (equipment.length == 0) {
          queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"')"
        } else {
          queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
        }
      } else {
        queryString = queryString + "JSON_CONTAINS(musclegroups, '\""+musclegroup+"\"') AND "
      }
    });

    equipment.forEach((equipmentObject, i) => {
      if (i == 0) {
        if (equipment.length == 1) {
          queryString = queryString + "JSON_CONTAINS(equipment, '\""+equipmentObject+"\"')='0'"
        } else {
          queryString = queryString + "JSON_CONTAINS(equipment, '\""+equipmentObject+"\"')='0' AND "
        }
      } else if (i == equipment.length - 1) {
        queryString = queryString + "JSON_CONTAINS(equipment, '\""+equipmentObject+"\"')='0'"
      } else {
        queryString = queryString + "JSON_CONTAINS(equipment, '\""+equipmentObject+"\"')='0' AND "
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
