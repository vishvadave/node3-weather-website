const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//defining paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine, views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setu static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Whats the Weather?',
        name: 'Vish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Vish'
    }) 
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is help page',
        title: 'Help',
        name: 'Vish'
    })
})

app.get('', (req, res) => {
    res.send('<h1>Weather Web</h1>')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {lat, long, loc} = {}) => {
        if (error) {
            return res.send({error})
        }

        forecast(lat, long, (error, fData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast: fData,
                loc,
                address: req.query.address
            })

        })
    })

    // console.log(req.query.address)
    // res.send({
    //     location: 'Kampala',
    //     forecast: 'Clear',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vish',
         errorMessage: 'Help not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vish',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})