const employeeModel = require("../models/employeeModel");

const createEmployee = (req, res) => {
    employeeModel.createEmployee(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            message: "Employee created successfully",
            employeeId: result.insertId
        });
    });
};

const getAllEmployees = (req, res) => {
    employeeModel.getAllEmployees((err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;

    employeeModel.getEmployeeById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

const updateEmployee = (req, res) => {
    const id = req.params.id;

    employeeModel.updateEmployee(
        id,
        req.body,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json({
                message: "Employee updated successfully"
            });
        }
    );
};

const deleteEmployee = (req, res) => {
    const id = req.params.id;

    employeeModel.deleteEmployee(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully"
        });
    });
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};