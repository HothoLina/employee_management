# Employee Management REST API

## Project Overview

A backend REST API built with Node.js, Express, and MySQL that allows users to manage employee records through full CRUD operations.

This project demonstrates:

- REST API development
- Express.js architecture
- MySQL database integration
- Validation middleware
- Error handling middleware
- Async/Await programming
- Environment variable management
- Professional project structure

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- express-validator
- dotenv
- nodemon

---

## Project Structure

```text
employee-management-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── employeeController.js
│   │
│   ├── middlewares/
│   │   ├── employeeValidation.js
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   └── employeeModel.js
│   │
│   ├── routes/
│   │   └── employeeRoutes.js
│   │
│   ├── utils/
│   │   └── apiResponse.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## API Endpoints

### Create Employee

```http
POST /employees
```

### Get All Employees

```http
GET /employees
```

### Get Employee By ID

```http
GET /employees/:id
```

### Update Employee

```http
PUT /employees/:id
```

### Delete Employee

```http
DELETE /employees/:id
```

---

## Example Request

```json
{
  "name": "Amira",
  "email": "amira@email.com",
  "department": "IT",
  "salary": 5000
}
```

---

## Example Response

```json
{
  "success": true,
  "message": "Employee created successfully",
  "data": {
    "employeeId": 1
  }
}
```

---

## Architecture

```text
Client
  ↓
Routes
  ↓
Controllers
  ↓
Models
  ↓
MySQL Database
```

---

## Features

- Create employees
- View all employees
- View employee by ID
- Update employee information
- Delete employees
- Request validation
- Centralized error handling
- Consistent API responses

---

## What I Learned

- Building REST APIs with Express
- Working with MySQL in Node.js
- Using async/await
- Middleware architecture
- Input validation
- Error handling patterns
- API design best practices
- Git and GitHub workflow

---

## Future Improvements

- JWT Authentication
- Role-Based Access Control
- Pagination
- Search and Filtering
- Docker Support
- Unit Testing
