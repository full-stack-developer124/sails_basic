var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch exercises',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      description: "Returns ok response from /api/responses/ok.js with json data",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let queryString = "SELECT * FROM exercises"
    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {

        let exercises = []

        result.rows.forEach((item, i) => {
          let equipment = JSON.parse(item.equipment)
          var mutableItem = item
          mutableItem.equipment = equipment
          exercises.push(mutableItem)
        });

        exits.success(exercises)
      }

    })

    return;
  }


};
