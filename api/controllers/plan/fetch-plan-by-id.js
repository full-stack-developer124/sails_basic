var mysqlStore = sails.getDatastore()

module.exports = {

  friendlyName: 'Fetch plan by id',

  description: '',

  inputs: {
    id: {
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
    let queryString = "SELECT * FROM plans WHERE id='"+inputs.id+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
        return exits.success({error: error});
      } else {
        let mutableItem = result.rows[0]
        let personalTrainer = JSON.parse(mutableItem.personalTrainer)
        let weeks = JSON.parse(mutableItem.weeks)
        mutableItem.personalTrainer = personalTrainer
        mutableItem.weeks = weeks
        return exits.success(mutableItem)
      }

    })

  }


};
