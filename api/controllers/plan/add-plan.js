var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Add plan',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true
    },
    numberOfWeeks: {
      type: 'number',
      required: true
    },
    weeks: {
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
    personalTrainerId: {
      type: 'string',
      required: true
    },
    personalTrainer: {
      type: 'string',
      required: true
    },
    date: {
      type: 'number',
      required: true
    },
    focus: {
      type: 'number',
      required: true
    },
    min_nwpw: {
      type: 'number',
      required: true
    },
    max_nwpw: {
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
    console.log("CALLED!");
    let id = inputs.id
    let numberOfWeeks = inputs.numberOfWeeks
    let weeks = inputs.weeks
    let title = JSON.stringify(inputs.title)
    let description = JSON.stringify(inputs.description)
    let personalTrainerId = inputs.personalTrainerId
    let personalTrainer = inputs.personalTrainer
    let date = inputs.date
    let focus = inputs.focus
    let min_nwpw = inputs.min_nwpw
    let max_nwpw = inputs.max_nwpw

    let queryString = "INSERT INTO plans (date, title, id, description, focus, numberOfWeeks, personalTrainer, personalTrainerId, weeks, max_nwpw, min_nwpw) VALUES ('"+date+"', "+title+", \""+id+"\", "+description+", '"+focus+"', '"+numberOfWeeks+"', '"+personalTrainer+"', '"+personalTrainerId+"', '"+weeks+"', '"+max_nwpw+"', '"+min_nwpw+"')"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        exits.success({message: 'error: ' + error.toString()})
      } else {
        exits.success({message: "success!"})
      }
    })

  }


};
