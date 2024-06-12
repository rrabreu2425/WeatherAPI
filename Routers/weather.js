const express=require('express')
const controller=require('../controller/weatherController')



const routerWeather= express.Router()
const app= express()

app.use('/api/weather', routerWeather)

routerWeather.get('/',controller.getWeather)
routerWeather.post('/', controller.postWeather)



module.exports= routerWeather
