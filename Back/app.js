var { app } = require('./api')
var { config } = require('./config')


app.listen(config.PORT, ()=>{
    console.log(`Server listening on port ${config.PORT}`)
})