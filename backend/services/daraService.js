const User = require('../models/userModel')
const fetchArticles = async () => {
    try{

        const deleted = await User.deleteMany({})
        const news = await User.create([
            {
              "userId": 1001,
              "password": "password1",
              "faculty": true,
              "username": "john_doe"
            },
            {
              "userId": 1002,
              "password": "password2",
              "faculty": false,
              "username": "jane_doe"
            },
            {
              "userId": 1003,
              "password": "password3",
              "faculty": true,
              "username": "james_smith"
            },
            {
              "userId": 1004,
              "password": "password4",
              "faculty": false,
              "username": "emily_jones"
            },
            {
              "userId": 1005,
              "password": "password5",
              "faculty": true,
              "username": "robert_louis"
            },
            {
              "userId": 1006,
              "password": "password6",
              "faculty": false,
              "username": "sara_williams"
            },
            {
              "userId": 1007,
              "password": "password7",
              "faculty": true,
              "username": "andrew_parker"
            },
            {
              "userId": 1008,
              "password": "password8",
              "faculty": false,
              "username": "olivia_king"
            },
            {
              "userId": 1009,
              "password": "password9",
              "faculty": true,
              "username": "jack_brown"
            },
            {
              "userId": 1010,
              "password": "password10",
              "faculty": false,
              "username": "chloe_davis"
            } 
          ])
        
        console.log("cron job ran")
    } catch (err) { 
        console.log(err)
    }
}


module.exports = {
    fetchArticles
}