const { Sequelize } = require("sequelize");
const { db } = require("../config/db");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Employee = db.define('employee', {
		  // Define attributes
		  firstname : DataTypes.TEXT,
		  lastname : DataTypes.TEXT,
		  hiredate : DataTypes.DATE,
		  terminationdate : DataTypes.DATE,
		  salary : DataTypes.DOUBLE,
		  uuid : {
			  type: DataTypes.UUID,
			  defaultValue: DataTypes.UUIDV4,
			  primaryKey: true
			}
	},{
		freezeTableName: true
	});

module.exports = {
    Employee
}