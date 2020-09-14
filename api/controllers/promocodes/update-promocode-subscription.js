var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update promocode subscription',


  description: '',


  inputs: {
    id: {
        type: 'string',
        required: true
      },
      numberOfSubscriptions: {
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

    let id = inputs.id;
    let numberOfSubscriptions = inputs.numberOfSubscriptions

    let queryString = "UPDATE promocodes SET numberOfSubscriptions='"+numberOfSubscriptions+"'WHERE id='"+id+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success()
      }
    })

  }


};
