const axios= require('axios')
const { render } = require('ejs')
const controller= {}


controller.postWeather= async(req, res)=>{
    const key= process.env.key
    const city= req.body.city
   
    let err="ERROR, Try Egain"
    let weather;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
    try{
   const response= await axios.get(url)
   weather= response.data  
   err=null
     }
    catch(err){
     weather=null
    }
    res.render('weather',{ weather, err})
    
}

controller.getWeather=(req, res)=>{
       res.render('weather', {weather: null, err:null})
}


module.exports=controller