// Important express stuff
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./middleware/passport')(passport);

// .env
require('dotenv').config();

// Initializing router and app
const router = express.Router();
const app = express();

// Importing connectDB
const connectDB = require('./db/connect.js');

// nav routes
const navigation = require('./routes/navigation.js');

// API routes
const productRoutes = require('./routes/products');
const purchaseRoutes = require('./routes/purchases');

// Login stuff
const loginRoute = require('./routes/login');
const loginAdmin = require('./routes/loginAPI');

const bodyParser = require('body-parser');
const upload = require('express-fileupload');

const port = process.env.PORT || 5000;

app.use(upload());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use('/', navigation);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/purchases', purchaseRoutes);

app.use('/api/v1/login', loginAdmin);
app.use('/users', loginRoute);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;