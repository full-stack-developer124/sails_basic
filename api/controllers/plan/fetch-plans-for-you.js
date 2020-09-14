var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch plans for you',


  description: '',


  inputs: {
    maxNWPW: {
      type: 'number',
      required: true
    },
    minNWPW: {
      type: 'number',
      required: true
    },
    focus: {
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
    let focus = inputs.focus

    let min = inputs.minNWPW
    let max = inputs.maxNWPW

    var queryString = "SELECT * FROM plans"

    if (focus == 3) {
      queryString = queryString + " WHERE min_nwpw >= '"+min+"' AND max_nwpw <= '"+max+"'"
    } else {
      queryString = queryString + " WHERE focus='"+focus+"' AND min_nwpw >= '"+min+"' AND max_nwpw <= '"+max+"'"
    }

    console.log(queryString);

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        var plans = []

        result.rows.forEach((item, i) => {
          var mutableItem = item
          let personalTrainer = JSON.parse(item.personalTrainer)
          let weeks = JSON.parse(item.weeks)
          mutableItem.personalTrainer = personalTrainer
          mutableItem.weeks = weeks
          plans.push(mutableItem)
        });

        return exits.success(plans)
      }

    })

  }


};
