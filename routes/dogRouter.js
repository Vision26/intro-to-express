const express = require("express")
const dogRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const dogs = [
    {breed:"Baden type", aga:3, _id:uuidv4()},
    {breed:"Zeus type", aga:6, _id:uuidv4()}, 
    {breed:"Chitzu", aga:1, _id:uuidv4()},
    {breed:"Husky", aga:9, _id:uuidv4()}
]

dogRouter.get("/", (req, res) => {
    res.send(dogs)
})

dogRouter.get("/:dogId", (req, res) => {
    const doggoID = req.params.dogId
    const addDoggo = dogs.find(dog => dog._id === doggoID)
    res.send(addDoggo)
})

dogRouter.post("/", (req, res) => {
    const addDog = req.body
    addDog._id = uuidv4()
    dogs.push(addDog)
    res.send(`SUCCESS: ${addDog.breed} has been POSTED!`)
})

// dogRouter.route("/")
// .get("/", (req, res) => {
//         res.send(dogs)
//     })
// .get("/:dogId", (req, res) => {
//     const doggoID = req.params.dogId
//     const addDoggo = dogs.find(dog => dog._id === doggoID)
//     res.send(addDoggo)
// })
// .post("/", (req, res) => {
//     const addDog = req.body
//     addDog._id = uuidv4()
//     dogs.push(addDog)
//     res.send(`SUCCESS: ${addDog.breed} has been POSTED!`)
// })
module.exports = dogRouter