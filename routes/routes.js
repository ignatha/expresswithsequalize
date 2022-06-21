const express = require('express');
const EmployeeServices = require("../services/EmployeeServices");
 
const router = express.Router();
 
router.get('/employee', EmployeeServices.getEmployee);
router.get('/employee/:uuid', EmployeeServices.getEmployeeById);
router.post('/employee', EmployeeServices.createEmployee);
router.put('/employee/:uuid', EmployeeServices.updateEmployee);
router.delete('/employee/:uuid', EmployeeServices.deleteEmployee);
 
module.exports = {
  router
}