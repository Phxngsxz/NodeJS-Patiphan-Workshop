const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { title : 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { title : 'About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', { title : 'Contact'});
});

app.listen(3000, () => {
    console.log("Server is running...");
})