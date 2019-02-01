// DEPENDENCIES
// =============================================================================
var express = require("express");

// EXPRESS CONFIG
// =============================================================================
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// =============================================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// LISTENER
// =============================================================================
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});