# crud-relational-generator-package
  

**[crud-relational-generator-package](https://github.com/jamelmrad/crud-relational-generator-package)** is a Node.js package that facilitates the generation of CRUD (Create, Read, Update, Delete) functionalities for any data model within your Node.js application simply in minutes. It simplifies the process of interacting with a database by providing reusable functions for common database operations. (mention persistance with any rdbms)

  

## Installation

  

To install crud-relational-generator-package , simply run:

  

```bash

npm i @zamoula/crud-relational-generator-package

```

  

## Usage

  

### Initializing the Database

  

Before using CRUD.js, you need to initialize your database connection using the `initDatabase` function provided by the package. Here's an example of how to initialize the database:

  

```javascript

const { initDatabase } = require('@zamoula/crud-relational-generator-package');

  

const  sequelize = initDatabase('database_name', 'username', 'password', 'host', 'port', 'dialect', forceSync);

```

  

### Defining Models
This package uses **Sequelize** behind the scenes , Here is the table with Sequelize data types and their corresponding SQL column types for MySQL, MariaDB, SQLite, PostgreSQL, MSSQL, and Oracle.

| Sequelize Data Type | MySQL Column Type | MariaDB Type | SQLite Type | PostgreSQL Type | MSSQL Type | Oracle Type |
|---------------------|-------------------|---------------------|--------------------|------------------------|-------------------|-------------------|
| STRING              | VARCHAR           | VARCHAR             | TEXT               | VARCHAR                | NVARCHAR(MAX)     | VARCHAR2          |
| TEXT                | TEXT              | TEXT                | TEXT               | TEXT                   | NVARCHAR(MAX)     | CLOB              |
| INTEGER             | INTEGER           | INTEGER             | INTEGER            | INTEGER                | INT               | NUMBER            |
| FLOAT               | FLOAT             | FLOAT               | REAL               | DOUBLE PRECISION       | FLOAT             | FLOAT             |
| DOUBLE              | DOUBLE            | DOUBLE              | REAL               | DOUBLE PRECISION       | FLOAT             | FLOAT             |
| DECIMAL             | DECIMAL           | DECIMAL             | NUMERIC            | NUMERIC                | DECIMAL           | NUMBER            |
| DATE                | DATETIME          | DATETIME            | TEXT               | TIMESTAMP              | DATETIME2         | DATE              |
| BOOLEAN             | BOOLEAN           | BOOLEAN             | INTEGER            | BOOLEAN                | BIT               | NUMBER(1,0)       |
| ENUM                | ENUM              | ENUM                | TEXT               | ENUM                   | NVARCHAR(MAX)     | VARCHAR2          |
| JSON                | JSON              | JSON                | TEXT               | JSON                   | NVARCHAR(MAX)     | CLOB              |
| JSONB               | JSON              | JSON                | TEXT               | JSONB                  | NVARCHAR(MAX)     | CLOB              |
| UUID                | CHAR(36)          | CHAR(36)            | TEXT               | UUID                   | UNIQUEIDENTIFIER  | RAW(16)           |
| ARRAY               | TEXT              | TEXT                | TEXT               | ARRAY                  | NVARCHAR(MAX)     | VARRAY            |
| RANGE               | TEXT              | TEXT                | TEXT               | RANGE                  | NVARCHAR(MAX)     | VARRAY            |
| GEOMETRY            | GEOMETRY          | GEOMETRY            | TEXT               | GEOMETRY               | VARBINARY(MAX)    | SDO_GEOMETRY      |

Once the database connection is established, you can define your data models using the `defineModel` function. Here's how you can define a model:

(you must add Sequelize orm to your own project dependencies)

  

```javascript

const { defineModel } = require('@zamoula/crud-relational-generator-package');

  

defineModel(sequelize, 'ModelName', {

// Define model attributes here

});

```
  

### CRUD Operations

  

crud-relational-generator-package provides functions for performing CRUD operations on your models:

  

-  `getAll`: Retrieve all records of a model.

-  `getById`: Retrieve a single record by its ID.

-  `create`: Create a new record.

-  `update`: Update an existing record.

-  `remove`: Delete a record.

  

Here's how you can use these functions:

  

```javascript

const { getAll, getById, create, update, remove } = require('@zamoula/crud-relational-generator-package');

  

// Example usage of getAll

app.get('/models/:modelName', getAll);

  

// Example usage of getById

app.get('/models/:modelName/:id', getById);

  

// Example usage of create

app.post('/models/:modelName', create);

  

// Example usage of update

app.put('/models/:modelName/:id', update);

  

// Example usage of remove

app.delete('/models/:modelName/:id', remove);

```

  

### Error Handling

  

crud-relational-generator-package handles errors gracefully. If a model is not found or if a record does not exist, appropriate error responses are sent.

  

## Contributing

  

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the [GitHub repository](https://github.com/jamelmrad/crud-relational-generator-package).

  

## License

  

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jamelmrad/crud-relational-generator-package/blob/main/LICENSE.txt) file for details.
