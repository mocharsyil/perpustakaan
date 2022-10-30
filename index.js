// const express = require('express');

// const path = require('path');
// const homeRoutes =require('./routes/home-routes');
// const pinjamBukuRoutes =require('./routes/pinjamBuku-routes');
// const pembayaranRoutes =require('./routes/pembayaran-routes');
// const kembalikanRoutes =require('./routes/kembalikan-routes');

// const app = express();


// app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(homeRoutes.routes);
// app.use(pinjamBukuRoutes.routes);
// app.use(pembayaranRoutes.routes);
// app.use(kembalikanRoutes.routes);


// app.listen(3000, () => console.log('App is listening on url 3000'));

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
        res.render('login.ejs');
    });

app.get('/register', (req, res) => {
        res.render('register.ejs');
    });

app.get('/home', (req, res) => {
        res.render('home.ejs');
    });

app.get('/kembalikan', (req, res) => {
        res.render('kembalikan.ejs');
    });

app.get('/pembayaran', (req, res) => {
        res.render('pembayaran.ejs');
    });

app.get('/pinjam', (req, res) => {
        res.render('pinjam.ejs');
    });

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});