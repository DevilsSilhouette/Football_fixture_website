const express = require('express');


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/table', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(session({
    secret: "team-undefined",
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

require("./routes.js")(app);

app.listen(PORT, () => {
	console.log("Server is running now.")
})