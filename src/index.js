const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Settings
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', PORT);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', require('./routes/index'));

app.listen(app.get('port'), ()=>{
    console.log(`[*] Server running on port ${PORT}`);
});