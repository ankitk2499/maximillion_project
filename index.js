const path = require('path');
const express = require('express');
const hbs = require('hbs')
const bodyParser = require('body-parser');
const app = express();

const errorController = require('./controllers/error');
const partialPath = path.join(__dirname,"./views/includes")

const mongoConnect = require('./util/db')

app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials(partialPath)

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

mongoConnect()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
