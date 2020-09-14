var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Fetch workout by id',


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
    let id = inputs.id;

    let queryString = "SELECT * FROM workouts where id='"+id+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        return exits.success(result.rows[0])
      }

    })
  }


};
