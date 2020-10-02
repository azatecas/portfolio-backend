exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          img_url: "https://i.imgur.com/WB913Xt.png",
          project_title: "Groa.us",
          project_desc:
            "Contributor to an Open Source movie recommendation plattform, that serves unbias movie recommendations based on user ratings, I was part of an Agile team that concisted of stakeholders, UX designers, Full Stack Developers, and Data Scientist. I significantly contributed to the implementation of Okta Oauth2 Authentication and Social Login Providers, as well a fixing many bugs and streamlining performace",
          tech_used:
            "RESTful Architecture, AJAX, OKTA,JAVASCRIPT, MATERIAL-UI, REACT, NODE, EXPRESS, POSTGRESQL, AWS AMPLIFY, AWS ELASTIC BEANSTALK",
          project_url: "https://groa.us",
          github_repo: "https://github.com/Lambda-School-Labs/Groa-fe",
        },
        {
          id: 2,
          img_url: "https://i.imgur.com/uzrpbAj.png",
          project_title: "Game of Life",
          project_desc:
            "Reactjs implementation of John Conway’s game of life. Created an algorithm that evaluates each active cell and allows for that cell to live or die based on the Game of Life rules.",
          tech_used: "CSS, JavaScript, React, Git, Vercel( formely Zeit)",
          project_url: "https://the-game-of-life.vercel.app/",
          github_repo: "https://github.com/azatecas/CS_Build_Week_1",
        },
        {
          id: 3,
          img_url: "https://i.imgur.com/nuRudAI.png",
          project_title: "Portfolio",
          project_desc:
            "Complete FullStack site created by me (Luis Pepen), as a way to showcase my front end and backend abilities, this site fetches my portfolio data from a custom REST api created with Node.js and Express",
          tech_used:
            "CSS, JavaScript, AJAX, React, Custom Hooks, Node, Express, SQLite, Knex, Git, Vercel( formely Zeit)",
          project_url: "https://luispepen.com",
          github_repo: "https://github.com/azatecas/portfolio-luis",
        },
        {
          id: 4,
          img_url: "https://i.imgur.com/QzKKuEb.png",
          project_title: "Water My Plants",
          project_desc:
            "This is a team Buildweek project in which I was assigned the role of React II Developer. I had to created a CRUD Web APP with full functionality using React and Redux to meet MVP. I created a Dashboard that allows the user to create, add, edit, and delete any plants in the Dashboard after login",
          tech_used:
            "CSS, JavaScript, Axios, AJAX, React, React Router, Redux, JWT, Git, Vercel( formely Zeit)",
          project_url: "https://front-end-2-five.now.sh/dashboard",
          github_repo:
            "https://github.com/Build-Week-Water-My-Plants-01/Front-End",
        },
        {
          id: 5,
          img_url: "https://i.imgur.com/YleRQq5.png",
          project_title: "ATLA Information Page",
          project_desc:
            "This page contains character and episode data. The data is fetched from an open Rest API(link in the Docs). This project utilizes Axios for async requests and I implemented Client side pagination, it has been refactored to include more CSS animations",
          tech_used:
            "CSS, JavaScript, Axios, AJAX, React, React Router, Particle.js, Git, Vercel( formely Zeit)",
          project_url: "https://avatar-alpha.now.sh/",
          github_repo: "https://github.com/azatecas/avatar-single-page-app",
        },
        {
          id: 6,
          img_url: "https://i.imgur.com/mugtsnl.png",
          project_title: "Custom Github Users",
          project_desc:
            "Web App that fetches user(s) information from the Github API and presents it in a simplified and more pleasing theme. The content lazy loads and provides endless scrolling. You can search for any github user on the platform, see their information, public repos, and followers",
          tech_used:
            "CSS, JavaScript, AJAX, React, React Router, Redux, Git, Vercel( formely Zeit)",
          project_url: "https://github-api-test.vercel.app/",
          github_repo: "https://github.com/azatecas/github-api-test",
        },
        {
          id: 7,
          img_url: "https://i.imgur.com/Xf9GXto.png",
          project_title: "Sauti Studio",
          project_desc:
            "Team buildweek application that allows you to design menu flows for lowend feature forms in emerging markets. My role was to create functional Login/signUp components, create a custom React Hook for form validation, and style the application using React styling library",
          tech_used:
            "React, Redux, Custom React Hooks, CSS, Javascript, Git, Vercel( formely Zeit)",
          project_url: "https://sauti-styled.now.sh/",
          github_repo: "https://github.com/Sauti-Studio3/Front-End",
        },
        {
          id: 8,
          img_url: "https://i.imgur.com/c63JJmt.png",
          project_title: "Marketing Page UI",
          project_desc:
            "This is a team Buildweek project in which i was assigned the role of Marketing UI Developer, I had to build and deploy a static Marketing Page UI for a Weightlifting App project",
          tech_used: "HTML, CSS, JavaScript, Netlify",
          project_url: "https://ui-weightlifting.netlify.com/",
          github_repo: "https://github.com/Weigth-Lifting-Journal-8/ui",
        },
      ]);
    })

    .then(function () {
      return knex("skills").insert([
        {
          id: 1,
          skills_name: "HTML5",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          id: 2,
          skills_name: "CSS",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          id: 3,
          skills_name: "SASS",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
        },
        {
          id: 4,
          skills_name: "LESS",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg",
        },
        {
          id: 5,
          skills_name: "JavaScript",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        },
        {
          id: 6,
          skills_name: "TypeScript",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
        {
          id: 7,
          skills_name: "Python",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
          id: 8,
          skills_name: "ReactJS",
          img_url: "https://i.imgur.com/sBOKqzY.png",
        },
        {
          id: 9,
          skills_name: "React Native",
          img_url: "https://i.imgur.com/sBOKqzY.png",
        },
        {
          id: 10,
          skills_name: "Redux",
          img_url: "https://cdn.worldvectorlogo.com/logos/redux.svg",
        },
        {
          id: 11,
          skills_name: "NodeJS",
          img_url: "https://i.imgur.com/vcx0Rhh.png",
        },
        {
          id: 12,
          skills_name: "Express",
          img_url:
            "https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png",
        },
        {
          id: 13,
          skills_name: "SQLite",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg",
        },
        {
          id: 14,
          skills_name: "PostgreSQL",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        },
        {
          id: 15,
          skills_name: "Git",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
        },
        {
          id: 16,
          skills_name: "Django",
          img_url:
            "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
        },
      ]);
    })
    .then(function () {
      return knex("users").insert([
        {
          username: "luis",
          password: "super",
        },
      ]);
    });
};
