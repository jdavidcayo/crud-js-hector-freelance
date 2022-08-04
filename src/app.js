import express from 'express';
import projectRoutes from './routes/projects.routes.js'


const app = express();

//middlewares
//servidor puede inteerpretar un objeto request json
app.use( express.json() );

//Uso de rutas definidas 
app.use( projectRoutes );

export default app;