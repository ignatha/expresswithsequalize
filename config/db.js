// import sequelize
const { Sequelize } = require("sequelize")
 
// create connection
const db = new Sequelize('shopee', 'postgres', 'aku', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
	    timestamps: false
	  },
});

module.exports = {
  db
}