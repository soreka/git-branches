const express = require('express')
const app = express()


app.get('/',function (req,res) {
    res.status(200).send("yaw yaw!")
    res.end()
})

const port = 3000

app.listen(3000,function () {
    console.log("server is running ");
})