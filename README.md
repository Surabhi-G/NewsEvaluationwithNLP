# NewsEvaluationwithNLP
Built a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 
NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Aylien to interact with their NLP system. 
This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

This project get us familiar with:
Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Service workers
Using APIs and creating requests to external URLs

Run project
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Below shows how to run in development and production mode.

run in development mode
To start the webpack dev server at port 8080

$ npm run build-dev

run in production mode
Generate the dist files and then start server at port 3000

$ npm run build-prod

$ npm run start

Configs
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Here, we have two webpack config files for both development mode(webpack.config.dev.js) and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies
