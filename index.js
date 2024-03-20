import express from 'express';
import router from './routes/router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(router);


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});