
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1, 
          img_url: 'https://i.imgur.com/nuRudAI.png',
          project_title: 'Portfolio',
          project_desc: 'Complete FullStack site created by me(Luis Pepen), as a way to showcase my front end and backend abilities',
          tech_used: 'CSS, JavaScript, React, Node, Express, SQLite',
          project_url: 'www.luisunlimited.com',
          github_repo: 'https://github.com/azatecas/portfolio-luis'
        },
        {
          id: 2, 
          img_url: 'https://i.imgur.com/BfFktlc.png',
          project_title: 'Avatar:TLA fan Page',
          project_desc: 'This is a fan page that fetches data from an open Rest API. This project utilizes axios and Client side pagination',
          tech_used: 'CSS, JavaScript, Axios, React, Redux',
          project_url: 'https://avatar-alpha.now.sh/',
          github_repo: 'https://github.com/azatecas/avatar-single-page-app'
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
