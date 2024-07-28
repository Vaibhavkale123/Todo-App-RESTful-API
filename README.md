 Todo App RESTful API
====================

This is a simple Todo app built with Node.js, Express.js, and MySQL. It allows you to perform CRUD (Create, Read, Update, Delete) operations on todos.

Getting Started
---------------

### Prerequisites

* Node.js installed
* MySQL installed

### Installing

1. Clone the repository
```
git clone https://github.com/yourusername/todo-app.git
```
2. Install the dependencies
```
npm install
```
3. Create a `.env` file in the root directory and add the following:
```makefile
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todos_db
PORT=3000
```
4. Create the database and table
```
mysql -u root -p < database.sql
```
5. Start the server
```
node app.js
```
Endpoints
---------

### Get all todos

`GET /todos`

### Get a todo by id

`GET /todos/:id`

### Add a todo

`POST /todos`

* Request body
```json
{
  "task": "Buy groceries"
}
```
### Update a todo

`PUT /todos/:id`

* Request body
```json
{
  "completed": true
}
```
### Delete a todo

`DELETE /todos/:id`

