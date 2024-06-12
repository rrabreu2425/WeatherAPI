const express= require('express')
const dotenv = require('dotenv');
const { render } = require('ejs');
const routerWeater= require('./Routers/weather')

const app= express()
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/weather', routerWeater)



app.set('view engine', 'ejs')

app.get('/api', (req, res)=>{
   res.render('index')
})



const PORT= process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server Runing in PORT ${PORT}`)
})