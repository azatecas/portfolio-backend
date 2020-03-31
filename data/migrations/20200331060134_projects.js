
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', col => {
      col.increments();
      col.varchar('img_url',500).notNullable();
      col.string('project_title',128).notNullable();
      col.string('project_desc',1000).notNullable();
      col.string('tech_used', 500).notNullable();
      col.string('project_url', 500).notNullable();
      col.string('github_repo', 500).notNullable();
    })

    .createTable('skills', col => {
        col.increments();
        col.string('skills_name',128).notNullable();
        col.varchar('img_url',500).notNullable();
    })

  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('skills')
    .dropTableIfExists('projects')
};
