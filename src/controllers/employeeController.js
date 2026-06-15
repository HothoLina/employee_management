const employeeModel = require("../models/employeeModel");
const {
    successResponse
} = require("../utils/apiResponse");

const createEmployee = async (req, res, next) => {
    try {
        const result =
            await employeeModel.createEmployee(req.body);

        successResponse(
            res,
            201,
            "Employee created successfully",
            { employeeId: result.insertId }
        );

    } catch (error) {
        next(error);
    }
};

const getAllEmployees = async (req, res, next) => {
    try {
        const employees =
            await employeeModel.getAllEmployees();

        successResponse(
            res,
            200,
            "Employees retrieved successfully",
            employees
        );

    } catch (error) {
        next(error);
    }
};

const getEmployeeById = async (req, res, next) => {
    try {
        const employee =
            await employeeModel.getEmployeeById(
                req.params.id
            );

        successResponse(
            res,
            200,
            "Employee retrieved successfully",
            employee
        );

    } catch (error) {
        next(error);
    }
};

const updateEmployee = async (req, res, next) => {
    try {
        await employeeModel.updateEmployee(
            req.params.id,
            req.body
        );

        successResponse(
            res,
            200,
            "Employee updated successfully"
        );

    } catch (error) {
        next(error);
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        await employeeModel.deleteEmployee(
            req.params.id
        );

        successResponse(
            res,
            200,
            "Employee deleted successfully"
        );

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};