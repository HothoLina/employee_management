const express = require("express");

const router = express.Router();

const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

const {
    employeeValidationRules,
    validate
} = require("../middlewares/employeeValidation");

router.post(
    "/",
    employeeValidationRules,
    validate,
    createEmployee
);

router.get("/", getAllEmployees);

router.get("/:id", getEmployeeById);

router.put(
    "/:id",
    employeeValidationRules,
    validate,
    updateEmployee
);

router.delete("/:id", deleteEmployee);

module.exports = router;