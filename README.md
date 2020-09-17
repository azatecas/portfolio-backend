# portfolio-backend
This is the Back End Portion of Luis Pepen's [Web Portfolio](https://github.com/azatecas/portfolio-luis).

## Endpoints

#### Project Routes

| Method | Endpoint                                     | Access Control | Description                                                                                                                                                                                                                                      |
| ------ | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | `/api/projects/`            |                | Returns all projects in the database.|
| POST   | `/api/projects/`            |                | Adds new project to the the database|
| PUT    | `/api/projects/:id`            |                | Edits a specific Project in the Database by id|
| POST   | `/api/projects/:id`            |                | Deletes a specific Project in the Database by id|

#### Skills Routes

| Method | Endpoint                                     | Access Control | Description                                                                                                                                                                                                                                      |
| ------ | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | `/api/skills/` |                | Returns all skills in the database|
| POST   | `/api/skills/` |                | Adds skills in the database|
| PUT    | `/api/skills/:id` |                | Edits skills in the database by id|
| DELETE | `/api/skills/:id` |                | Deletes skills in the database by id|


Technologies used in this project:

    Node.js
    Express
    Knex
    Express-Rate-Limiter
    CORS
    Helmet
    SQlite

This Project is constantly evolving, any major updates will be reflect on the commits and the README


