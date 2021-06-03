import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
import WorkshopRepo from './data/WorkshopRepo';

const app = express();
const workshopRepo = new WorkshopRepo();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

const test = async () => {
    console.log(await workshopRepo.getAll());
}

test();

export default app;
