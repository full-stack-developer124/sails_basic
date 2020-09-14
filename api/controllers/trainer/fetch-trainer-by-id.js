var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch trainer by id',


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
    let queryString = "SELECT * FROM personal_trainers WHERE uuid='"+inputs.id+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        exits.success({message: 'No trainer'})
      } else {
        if (result.rows[0]) {
          exits.success(result.rows[0])
        } else {
          exits.success({message: 'No trainer'})
        }
      }

    })
  }


};
