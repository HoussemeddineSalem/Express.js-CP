const express = require('express');
const app = express();
const port = '4000';
const timer = require('./time')

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));



if (timer().currentDay !== 6 && timer().currentDay !== 7
    && timer().currentHour < 20 && timer().currentHour > 9) {
    app.get('/', (req, res) => {
        console.log('this is a get request');
        res.render('homepage')
    });

    app.get('/contactus', (req, res) => {
        res.render('contact')
    })

    app.get('/ourservices', (req, res) => {
        res.render('ourservices')
    })
} else {
    app.get('/', (req, res) => {
        console.log('this is a get request');
        res.send('<p>we are on vacation</p>')
    });
}

app.listen(port, () => {
    console.log('app is listening on port 4000');
})