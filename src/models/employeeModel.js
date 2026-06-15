const db = require("../config/db");

const createEmployee = async (employee) => {
    const { name, email, department, salary } = employee;

    const query = `
        INSERT INTO employees
        (name, email, department, salary)
        VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.execute(
        query,
        [name, email, department, salary]
    );

    return result;
};

const getAllEmployees = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM employees"
    );

    return rows;
};

const getEmployeeById = async (id) => {
    const [rows] = await db.execute(
        "SELECT * FROM employees WHERE id = ?",
        [id]
    );

    return rows;
};

const updateEmployee = async (id, employee) => {
    const { name, email, department, salary } = employee;

    const [result] = await db.execute(
        `
        UPDATE employees
        SET name = ?, email = ?, department = ?, salary = ?
        WHERE id = ?
        `,
        [name, email, department, salary, id]
    );

    return result;
};

const deleteEmployee = async (id) => {
    const [result] = await db.execute(
        "DELETE FROM employees WHERE id = ?",
        [id]
    );

    return result;
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};