var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Add workout',

  description: '',

  inputs: {
    date: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    duration: {
      type: 'number',
      required: true
    },
    id: {
      type: 'string',
      required: true
    },
    level: {
      type: 'number',
      required: true
    },
    personalTrainerId: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    components: {
      type: 'ref',
      required: true
    },
    exercises: {
      type: 'ref',
      required: true
    },
    personalTrainer: {
      type: 'ref',
      required: true
    },
    musclegroups: {
      type: 'ref',
      required: true
    },
    equipment: {
      type: 'ref',
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

    let date = inputs.date
    let description = JSON.stringify(inputs.description)
    let duration = inputs.duration
    let id = inputs.id
    let level = inputs.level
    let personalTrainerId = inputs.personalTrainerId
    let title = JSON.stringify(inputs.title)
    let components = JSON.stringify(inputs.components)
    let exercises = JSON.stringify(inputs.exercises)
    let musclegroups = JSON.stringify(inputs.musclegroups)
    let equipment = JSON.stringify(inputs.equipment)

    let personalTrainer = inputs.personalTrainer

    let queryString = "INSERT INTO workouts (date, description, duration, id, level, personalTrainerId, title, components, exercises, personalTrainer, musclegroups, equipment) VALUES ('"+date+"', "+description+", '"+duration+"', \""+id+"\", '"+level+"', \""+personalTrainerId+"\", "+title+", '"+components+"', '"+exercises+"', '"+personalTrainer+"', '"+musclegroups+"', '"+equipment+"')"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        exits.success({message: 'error: ' + error.toString()})
      } else {
        exits.success({message: "success!"})
      }
    })
    // All done.
    return;

  }


};
