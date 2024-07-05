const express = require('express');
const http = require('http');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const server = http.createServer(app);

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Use express layouts
app.use(expressLayouts);

// Routes configuration
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Handle 404 errors
app.get('*', function(req, res) {
    res.render('notFound');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
