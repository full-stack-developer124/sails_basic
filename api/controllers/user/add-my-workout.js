var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Add my workout',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    components: {
      type: 'ref',
      required: true
    },
    id: {
      type: 'string',
      required: true
    },
    exercises: {
      type: 'ref',
      required: true
    },
    duration: {
      type: 'number',
      required: true
    },
    date: {
      type: 'number',
      required: true
    },
    level: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    let workoutJSON = {
      title: inputs.title,
      description: inputs.description,
      components: inputs.components,
      id: inputs.id,
      exercises: inputs.exercises,
      duration: inputs.duration,
      date: inputs.date,
      level: inputs.level
    };

    let id = inputs.id

    let formattedWorkout = JSON.stringify(workoutJSON)
    let queryString = "UPDATE users SET my_workouts = JSON_INSERT(my_workouts, '$.\""+id+"\"', CAST('"+formattedWorkout+"' AS JSON)) WHERE email='"+inputs.email+"'";
    //$.myWorkout is wrong. myWorkout should be the id of the workout that's trying to be inserted.
    console.log(queryString)
    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        console.log("SUCCESS: " + result)
      }
    })

  }


};
