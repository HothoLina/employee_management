const db = require("../config/db");

const createEmployee = (employee, callback) => {
    const { name, email, department, salary } = employee;

    const query = `
        INSERT INTO employees
        (name, email, department, salary)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [name, email, department, salary],
        callback
    );
};

const getAllEmployees = (callback) => {
    const query = "SELECT * FROM employees";

    db.query(query, callback);
};

const getEmployeeById = (id, callback) => {
    const query = "SELECT * FROM employees WHERE id = ?";

    db.query(query, [id], callback);
};

const updateEmployee = (id, employee, callback) => {
    const { name, email, department, salary } = employee;

    const query = `
        UPDATE employees
        SET name = ?, email = ?, department = ?, salary = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [name, email, department, salary, id],
        callback
    );
};

const deleteEmployee = (id, callback) => {
    const query = `
        DELETE FROM employees
        WHERE id = ?
    `;

    db.query(query, [id], callback);
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};