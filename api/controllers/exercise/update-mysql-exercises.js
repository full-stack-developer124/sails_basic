var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Update mysql exercises',


  description: '',


  inputs: {
    equipment: {
      type: "ref",
      required: true
    },

    animationUrl: {
      type: 'string',
      required: true
    },

    category: {
      type: 'string',
      required: true
    },

    narratorFilePath: {
      type: 'string',
      required: true
    },

    title: {
      type: 'string',
      required: true
    },

    uuid: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    let uuid = inputs.uuid
    let title = inputs.title
    let narratorFilePath = inputs.narratorFilePath
    let exerciseDescription = "empty"
    let equipment = JSON.stringify(inputs.equipment)
    let category = inputs.category
    let animationUrl = inputs.animationUrl

    let queryString = "INSERT INTO exercises (uuid,title,narratorFilePath,exerciseDescription,equipment,category,animationUrl) VALUES('"+uuid+"','"+title+"','"+narratorFilePath+"','"+exerciseDescription+"','"+equipment+"','"+category+"','"+animationUrl+"')";

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
      }

    })

  }


};
