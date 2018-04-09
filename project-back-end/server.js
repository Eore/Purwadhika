const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const cors = require('cors')
const port = 2000;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     next();
// })

app.use(cors());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: `${Date.now().toString(16)}`
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(`${__dirname}/images`))
app.use(fileupload())
// app.set('view engine', 'ejs');
// app.set('views', `${__dirname}/public`);

const user = require('./app/routes/api/user');
const warna = require('./app/routes/api/warna');
const kategori = require('./app/routes/api/kategori');
const subKategori = require('./app/routes/api/subKategori');
const produk = require('./app/routes/api/produk');
const cart = require('./app/routes/api/cart');
const invoice = require('./app/routes/api/invoice');
const ukuran = require('./app/routes/api/ukuran');

app.use('/api/user', user);
app.use('/api/warna', warna);
app.use('/api/kategori', kategori);
app.use('/api/subkategori', subKategori);
app.use('/api/produk', produk);
app.use('/api/cart', cart);
app.use('/api/invoice', invoice);
app.use('/api/ukuran', ukuran);

app.listen(port, console.log(`Server run in port ${port}`))