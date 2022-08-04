import app from './app.js';
import {sequelize} from './database/database.js';
import './models/Project.js';
import './models/Task.js';

const main = async () => {
    
    try {
        app.listen(5000);
        console.log("Servidor escuchando en puerto 5000");    
        
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();




