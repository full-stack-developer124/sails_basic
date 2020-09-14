var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Complete profile',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    focus: {
      type: 'number',
      required: true
    },
    gender: {
      type: 'number',
      required: true
    },
    height: {
      type: 'number',
      required: true
    },
    weight: {
      type: 'ref',
      required: true
    },
    birthdate: {
      type: 'number',
      required: true
    },
    unitSystem: {
      type: 'number',
      required: true
    },
  },


  exits: {
    success: {
      message: "Fetched trainers successfully!",
      responseType: "okWithJSON"
    }
  },


  fn: async function (inputs, exits) {
    let focus = inputs.focus
    let gender = inputs.gender
    let height = inputs.height
    let weight = JSON.stringify([inputs.weight])
    let birthdate = inputs.birthdate
    let unitSystem = inputs.unitSystem
    let email = inputs.email

    let queryString = "UPDATE users SET focus='"+focus+"', gender='"+gender+"', height='"+height+"', data='"+JSON.stringify({})+"', weight='"+weight+"',birthdate='"+birthdate+"', unitSystem='"+unitSystem+"', completedConfig='"+1+"', my_workouts='"+JSON.stringify({})+"', current_plan='"+JSON.stringify({})+"', week='"+JSON.stringify({})+"', saved_workouts='"+JSON.stringify({})+"' WHERE email='"+email+"'"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        exits.success({message: 'success'})
      }
    })
  }


};
