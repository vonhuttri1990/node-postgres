const Sequelize = require('sequelize');
const sequelize = new Sequelize(
                    process.env.DB_SCHEMA || 'api',
                    process.env.DB_USER || 'me',
                    process.env.DB_PASSWORD || 'password',
                    {
                        host: process.env.DB_HOST || 'localhost',
                        port: process.env.DB_PORT || 5432,
                        dialect: 'postgres',
                        dialectOptions: {
                            ssl: process.env.DB_SSL == "true"
                        }
                    });

sequelize.authenticate()
.then(()=> {
    console.log('Connection has been established successfully')
})
.catch(err => {
    console.error('Unable to connect to the database', error)
})
const User = sequelize.define('users', {
    // ID: {
    //     type: Sequelize.DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true

    // },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {
    sequelize: sequelize,
    User : User
}