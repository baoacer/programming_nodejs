const app = require('./app')

const PORT = 3058

const server = app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

 
module.exports = server