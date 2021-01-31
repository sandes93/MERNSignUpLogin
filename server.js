const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const passport = require('passport');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5001;

// Define middleware here
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));
// DB Config
const mongoURI = 'mongodb+srv://trilogy:trilogy@cluster0.u8m9s.mongodb.net/mernlogin?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || mongoURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use(routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
