const db = require('../db')
const { User } = require('../models')

const createUsers = async() => {
    const users = [
        {
            username: 'Jeremy',
            loggedIn: false,
            email:'jlemenager321@gmail.com',
            password:'1234'
        }
    ]
    await User.insertMany(users)
    console.log('Added Users')
}

const run = async() =>{
    await createUsers()
    db.close()
}

run()