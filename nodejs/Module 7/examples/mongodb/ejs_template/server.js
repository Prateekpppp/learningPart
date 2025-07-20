app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.locals.siteTitle = "My Express App";
    next();
});

app.get('/', (req, res) => {
    res.render('index'); // The view can access res.locals.siteTitle
});
