const express = require('express')
const mongoose = require('mongoose')


const path = require('path')
const cors = require('cors')

const indexRoute = require('./routes/index.route')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json({ 
    extended: false
}))

app.use('/images', express.static(path.join(__dirname, '/images')))

app.use('/', indexRoute)

const URI = process.env.MONGODB_URI || "mongodb+srv://Dru1DD:7NAQ3D9dR5bNrj9v@cluster0.ppmdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const start = async () => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}...`)
        })
    } catch(e) {
        console.log(e)
    }
}

start() 