const {Employee} = require("../models/Employee.js");
 
const getEmployee = (req, res) => {
        const employees = Employee.findAll()
        .then((employees) => {
            res.send(employees)
          })
        .catch((error) => {
            console.error('Something bad happened:', error.toString())
          });
}

const getEmployeeById = (req, res) => {
        const employees = Employee.findAll({
            where: {
                uuid: req.params.uuid
            }
        })
        .then((employees) => {
            res.send(employees[0])
          })
        .catch((error) => {
            console.error('Something bad happened:', error.toString())
          });    
}

const createEmployee = (req, res) => {
        Employee.create(req.body)
        .then((employees) => {
            res.json({
                "message": "Employee added"
            })
          })
        .catch((error) => {
            console.error('Something bad happened:', error.toString())
          });
}
 
const updateEmployee = (req, res) => {
        Employee.update(req.body, {
            where: {
                uuid: req.params.uuid
            }
        })
        .then((employees) => {
            res.json({
                "message": "Employee Updated"
            })
          })
        .catch((error) => {
            console.error('Something bad happened:', error.toString())
          });
}

const deleteEmployee = (req, res) => {
        Employee.destroy({
            where: {
                uuid: req.params.uuid
            }
        })
        .then((employees) => {
            res.json({
                "message": "Employee Deleted"
            })
          })
        .catch((error) => {
            console.error('Something bad happened:', error.toString())
          });
}

module.exports = {
    getEmployee,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}