var express = require('express'),
    path = require('path'),
    app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname)));
app.listen(3000);