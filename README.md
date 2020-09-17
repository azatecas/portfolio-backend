# portfolio-backend
RESTful Node/Express api for the [Web Portfolio](https://github.com/azatecas/portfolio-luis).
Currently, all endpoints have been made and are working locally. However the deployed version may have some of these endpoints disabled until Authentication is applied. The current plan is to use Okta Auth for authentication. A client dashboard is being worked on and the README will be updated accordingly once it has been deployed.

## Endpoints

#### Project Routes

| Method | Endpoint                                     | Access Control | Description                                                                                                                                                                                                                                      |
| ------ | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | `/api/projects/`            |      CORS       | Returns all projects in the database.|
| POST   | `/api/projects/`            |      CORS       | Adds new project to the the database|
| PUT    | `/api/projects/:id`         |      CORS       | Edits a specific Project in the Database by id|
| POST   | `/api/projects/:id`         |      CORS       | Deletes a specific Project in the Database by id|

#### Skills Routes

| Method | Endpoint                                     | Access Control | Description                                                                                                                                                                                                                                      |
| ------ | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | `/api/skills/`    |        CORS      | Returns all skills in the database|
| POST   | `/api/skills/`    |        CORS      | Adds skills in the database|
| PUT    | `/api/skills/:id` |        CORS      | Edits skills in the database by id|
| DELETE | `/api/skills/:id` |        CORS      | Deletes skills in the database by id|

## Data Model

#### Projects

---

```
{
  id: INT,
  img_url: STRING,
  project_title: STRING,
  project_des: STRING,
  tech_used: STRING,
  project_url: STRING,
  rep: STRING  
}
```

#### Skills

---

```
{
  id: INT,
  img_url: STRING,
  skills_name: STRING
}
```
Technologies used in this project:

    Node.js
    Express
    Knex
    Express-Rate-Limiter
    CORS
    Helmet
    SQlite

This Project is constantly evolving, any major updates will be reflect on the commits and the README


