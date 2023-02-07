const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")
app.use(express.json())
//req= request, res= response
//Fake Data

app.use("/user", require("./routes/userRouter.js"))

app.use("/dogs", require("./routes/dogRouter.js"))

app.listen(8000, () => {
    console.log('Server is working and running on host 8000...')
})