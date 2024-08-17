import { Sequelize } from 'sequelize';

// cf = nombre del schema // usuario de mysql // contraseña de mysql
const sequelize = new Sequelize ('cf', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;