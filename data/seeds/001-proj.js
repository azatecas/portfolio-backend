
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1, 
          img_url: 'rowValue1',
          project_title: 'sample',
          project_desc: 'this is description',
          tech_used: 'knex,express,node',
          project_url: 'www.luisunlimited.com',
          github_repo: 'github.com/azatecas'
        },
        {
          id: 2, 
          img_url: 'rowValue2',
          project_title: 'sample2',
          project_desc: 'this is description2',
          tech_used: 'knex,express,node2',
          project_url: 'www.luisunlimited.com2',
          github_repo: 'github.com/azatecas2'
        },
        {
          id: 3, 
          img_url: 'rowValue3',
          project_title: 'sample3',
          project_desc: 'this is description3',
          tech_used: 'knex,express,node3',
          project_url: 'www.luisunlimited.com3',
          github_repo: 'github.com/azatecas3'
        },
        {
          id: 4, 
          img_url: 'rowValue4',
          project_title: 'sample4',
          project_desc: 'this is description4',
          tech_used: 'knex,express,node4',
          project_url: 'www.luisunlimited.com4',
          github_repo: 'github.com/azatecas4'
        },
        
      ]);
    })
    .then(function () {
      return knex('skills').insert([
        {
          id: 1,
          skills_name: 'HTML5',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
        },
        {
          id: 2,
          skills_name: 'CSS',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
        },
        {
          id: 3,
          skills_name: 'SASS',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'
        },
        {
          id: 4,
          skills_name: 'LESS',
          img_url: 'https://www.vectorlogo.zone/util/preview.html?image=/logos/lesscss/lesscss-ar21.svg'
        },
        {
          id: 5,
          skills_name: 'JavaScript',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
        },
        {
          id: 6,
          skills_name: 'ReactJS',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        {
          id: 7,
          skills_name: 'Redux',
          img_url: 'https://cdn.worldvectorlogo.com/logos/redux.svg'
        },
        {
          id: 8,
          skills_name: 'NodeJS',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
        },
        {
          id: 9,
          skills_name: 'SQLite',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg'
        },
        {
          id: 10,
          skills_name: 'PostgreSQL',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
        },        
      ])
    })
};
