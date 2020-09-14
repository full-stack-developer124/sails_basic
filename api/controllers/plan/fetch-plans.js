var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch plans',


  description: '',


  inputs: {
    count: {
      type: 'number',
      required: false
    },
    focus: {
      type: 'number',
      required: false
    }
  },


  exits: {
    success: {
      message: "Fetched trainers successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {

    var queryString = ""

    if (inputs.count && inputs.focus) {
      queryString = "SELECT * FROM plans WHERE focus =" + inputs.focus.toString() + " LIMIT " + inputs.count.toString()
    } else if (inputs.count) {
      if (inputs.count == 0) {
        queryString = "SELECT * FROM plans"
      } else {
        queryString = "SELECT * FROM plans LIMIT " + inputs.count.toString()
      }
    } else if (inputs.focus) {
      queryString = "SELECT * FROM plans WHERE focus =" + inputs.focus.toString()
    } else {
      queryString = "SELECT * FROM plans"
    }

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
