var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch current user',


  description: '',


  inputs: {
    email: {
      type: 'string',
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

    let queryString = "SELECT * FROM users WHERE email= '"+inputs.email+"'"
    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error);
        exits.success({message: "Error occured: " + error.toString()});
      } else if(result.rows.length === 0) {
          exits.success({message: "Not Found: "});
      } else {
        let weightArray = JSON.parse(result.rows[0].weight)
        let currentPlanJSON = JSON.parse(result.rows[0].current_plan)
        let myWorkoutsJSON = JSON.parse(result.rows[0].my_workouts)
        let savedWorkoutsJSON = JSON.parse(result.rows[0].saved_workouts)
        let dataJSON = JSON.parse(result.rows[0].data)
        let weekJSON = JSON.parse(result.rows[0].week)

        let json = result.rows[0]
        json.weight = weightArray
        json.current_plan = currentPlanJSON
        json.my_workouts = myWorkoutsJSON
        json.data = dataJSON
        json.saved_workouts = savedWorkoutsJSON
        json.week = weekJSON

        exits.success(json)
      }
    })

    return;
  }


};
