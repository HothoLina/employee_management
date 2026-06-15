// with validation==>

// User Input
//      ↓
// Validation
//      ↓
// Controller
//      ↓
// Database



const { body, validationResult } = require("express-validator");

const employeeValidationRules = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("department")
        .notEmpty()
        .withMessage("Department is required"),

    body("salary")
        .isFloat({ min: 0 })
        .withMessage("Salary must be a positive number")
];

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    employeeValidationRules,
    validate
};