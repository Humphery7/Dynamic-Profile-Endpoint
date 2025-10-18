import express from 'express';
import router from './route/route.js';
import cors from 'cors';
import errorHandlerMiddleWare from './middleware/errorHandler.js';
import notFoundMiddleWare from './middleware/notFound.js';
import globalLimiter from './middleware/rateLimiter.js';


const app = express();



app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(globalLimiter);

app.use('/', router);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

export default app;