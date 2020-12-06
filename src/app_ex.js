
const request = require('request')
// const geocode=require('./utils/geocode.js')
// const forcast=require('./utils/forcast.js')
// const prompt = require('prompt-sync')()
const path =require('path')
const express= require('express')
const hbs = require('hbs')

const app= express()

const port = process.env.PORT || 3000

// define path for express config

const publicDipath= path.join(__dirname, '../public') // return the path of index.html
const viewsPath = path.join(__dirname, '../views-changed-name/views')
const partialsPath = path.join(__dirname, '../html-code/partials')

// setup handelbars engine and vies location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to server

app.use(express.static(publicDipath)) 

app.get('', (req,res) =>
	{
		// res.render('index',{title: 'Wheather', name:'moussaoui'})
	})
app.get('/about', (re,res) => {
	res.render('about',{title: 'About', name:'moussaoui'})
})

app.get('/blog', (req,res) => {
	res.render('help',{title: 'Blog', name:'Abdeslam Moussaoui'})
})


app.listen(port, () =>{console.log('listening on port ' +port )})
