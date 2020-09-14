var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch plan by trainer id',


  description: '',


  inputs: {
    trainerId: {
      type: 'string',
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
    var queryString = "SELECT * FROM plans WHERE personalTrainerId='"+inputs.trainerId+"'"

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
