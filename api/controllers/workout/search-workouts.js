var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Search workouts',


  description: '',


  inputs: {
    searchText: {
      type: 'string',
      required: true
    },
    count: {
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
    let searchText = inputs.searchText
    let count = inputs.count

    var queryString = ""

    if (count == 0) {
      queryString = "SELECT * FROM workouts WHERE Match(title, description) Against('"+searchText+"')"
    } else {
      queryString = "SELECT * FROM workouts WHERE Match(title, description) Against('"+searchText+"') LIMIT " + count.toString()
    }

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
