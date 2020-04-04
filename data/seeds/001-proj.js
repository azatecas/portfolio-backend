
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1, 
          img_url: 'https://i.imgur.com/nuRudAI.png',
          project_title: 'Portfolio',
          project_desc: 'Complete FullStack site created by me (Luis Pepen), as a way to showcase my front end and backend abilities, this site fetches data from a custom REST api',
          tech_used: 'CSS, JavaScript, React, Custom Hooks, Node, Express, SQLite, Knex, Zeit',
          project_url: 'www.luisunlimited.com',
          github_repo: 'https://github.com/azatecas/portfolio-luis'
        },
        {
          id: 2, 
          img_url: 'https://i.imgur.com/r1ZuH0y.png',
          project_title: 'ATLA Fan Page',
          project_desc: 'This is a fan page that fetches data from an open Rest API. This project utilizes Axios and Client side pagination, it was later refactored to include more CSS animations',
          tech_used: 'CSS, JavaScript, Axios, React, React Router, Particle.js, Zeit',
          project_url: 'https://avatar-alpha.now.sh/',
          github_repo: 'https://github.com/azatecas/avatar-single-page-app'
        },
        {
          id: 3, 
          img_url: 'https://i.imgur.com/QzKKuEb.png',
          project_title: 'Water my plants',
          project_desc: 'This is a team Buildweek project in which i was assigned the role of React II Developer and had to add CRUD functionality with React and Redux to this project. Dashboard allows you to create, add, edit, and delete any plants in your dashboard',
          tech_used: 'CSS, JavaScript, Axios, React, React Router, Redux, Auth Tokens, Zeit',
          project_url: 'https://front-end-2-five.now.sh/dashboard',
          github_repo: 'https://github.com/Build-Week-Water-My-Plants-01/Front-End'
        },
        {
          id: 4, 
          img_url: 'https://i.imgur.com/c63JJmt.png',
          project_title: 'Marketing Page UI',
          project_desc: 'This is a team Buildweek project in which i was assigned the role of Marketing UI Developer, I had to build and deploy a static Marketing Page UI for a Weightlifting App project',
          tech_used: 'HTML, CSS, JavaScript, Netlify',
          project_url: 'https://ui-weightlifting.netlify.com/',
          github_repo: 'https://github.com/Build-Week-Water-My-Plants-01/Front-End'
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
          img_url: 'https://www.vectorlogo.zone/logos/lesscss/lesscss-ar21.svg'
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
          skills_name: 'React Router',
          img_url: 'https://cdn.worldvectorlogo.com/logos/react-router.svg'
        },
        {
          id: 9,
          skills_name: 'NodeJS',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
        },
        {
          id: 10,
          skills_name: 'SQLite',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg'
        },
        {
          id: 11,
          skills_name: 'PostgreSQL',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
        },        
      ])
    })
};
