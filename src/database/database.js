import Sequelize from 'sequelize';

export const sequelize = new Sequelize( "todo-app", 'david', 'narampol',{
    host: 'localhost',
    dialect: 'mysql'
});


