var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Add workout to user data',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    dateId: {
      type: 'string',
      required: true
    },
    workoutId: {
      type: 'string',
      required: true
    },
    workoutDuration: {
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
    let dateId = inputs.dateId

    let json = JSON.stringify({
      duration: inputs.workoutDuration,
      id: inputs.workoutId
    });
    
    let queryString = "UPDATE users SET data = JSON_INSERT(data, '$.\""+dateId+"\"', CAST('"+json+"' AS JSON)) WHERE email='"+inputs.email+"'";
    console.log(queryString);
    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: "SUCCESS"})
      }
    })

  }


};
