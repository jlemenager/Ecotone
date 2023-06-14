const { User } = require('../models')

const getAllUsers = async(req,res) => {
    try{
        const users = await User.find()
        return res.status(200).json({ users })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getUser = async(req,res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id)
        if (user){
            return res.status(200).json({ user })
        } else {
            return res.status(400).send("User doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const createUser = async(req, res) => {
    try{
        const user = new User(req.body)
        await user.save()
        return res.status(200).json({ user })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateUser = async(req,res) => {
    try{
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, {new:true})
        if (user){
            res.status(200).json({ user })
        } else {
            res.status(400).send("User doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteUser = async(req,res) => {
    try{
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if(user){
            return res.status(200).json({ user })
        } else {
            return res.status(400).send("User doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}