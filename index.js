const express = require('express');
const app = express();
const port = '4000';
const time = require('./time');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    let middlewareValue = time().areWeWorking;
    (!middlewareValue) ? res.send('We are on a vacation') : next()

})

app.get('/', (req, res) => {
    console.log('this is a get request');
    res.render('homepage', { currentDate: time().dateFormated })
});

app.get('/:id', (req, res) => {
    console.log(req.params)
    res.render(req.params.id)
})

app.listen(port, () => {
    console.log('app is listening on port 4000');
})

