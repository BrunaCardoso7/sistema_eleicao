const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

                                                                                                                                                                                                      

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

