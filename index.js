import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import router from "./src/routes/router.js"

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({extended: true})); // ensures urlencoded data can be parsed by express when we call req.body
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(`${__dirname}/src/images`));
app.use('/scripts', express.static(`${__dirname}/src/scripts`));
app.use('/configs', express.static(`${__dirname}/configs`));

app.use((err, req, res, next) => {
    const {statusCode = 500, message = 'Something went wrong'} = err;
    if(!err.message) err.message = 'Oh no, something went wrong!';

    //res.status(statusCode).render('error', { err });

})

app.get('/', (req, res) => {
    res.render('home');
});

app.use(router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`Connect to http://localhost:${port}`);
});