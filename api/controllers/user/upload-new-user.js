var mysqlStore = sails.getDatastore()

module.exports = {


  friendlyName: 'Upload new user',


  description: '',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    name: {
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

    let email = inputs.email
    let name = inputs.name

    let queryString = "INSERT INTO users (email, name) VALUES ('"+email+"', '"+name+"')"

    mysqlStore.sendNativeQuery(queryString).exec(function (error, result) {
      if (error) {
        console.log("ERROR: " + error)
      } else {
        console.log("YES!")
        exits.success({message: "SUCCESS"})
      }
    })

  }


};
