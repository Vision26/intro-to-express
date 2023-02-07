const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const users = [
    { name: 'salomon', age: 30, _id: uuidv4() },
    { name: 'ty', age: 2, _id: uuidv4() },
    { name: 'crabboy', age: 43, _id: uuidv4() },
    { name: 'choy', age: 23, _id: uuidv4() },
    { name: 'craig', age: 60, _id: uuidv4() }
]

//One Type of syntax:

//GET All Request
userRouter.get("/", (req, res) => {
    res.send(users)
})


//GET One Request:
userRouter.get("/:userId", (req, res) => {
    const grabId = req.params.userId
    const findId = users.find(id => id._id === grabId)
    res.send(findId)
})


//Post Request
userRouter.post("/", (req, res) => {
    const added = req.body
    added._id = uuidv4()
    users.push(added)
    res.send(`SUCCESS: The post ${added.name} has been added to the API!`)
})

//Second Type of Syntax:
// userRouter.route("/")
//     .get((req, res) => {
//         res.send(users)
//     })
//     .post((req, res) => {
//         const added = req.body
//         added._id = uuidv4()
//         users.push(added)
//         res.send(`SUCCESS: The post ${added.name} has been added to the API!`)
//     })
module.exports = userRouter