# Emaily Server
Back-end side of [Stephen Grider's Fullstack Web Development course](https://www.udemy.com/node-with-react-fullstack-web-development/)

## Running locally
To run the project locally clone this repo, cd into it and run:
```bash
npm i
npm run dev
```
This will start a dev server on http://localhost:5000/, note that for the server to work as expected you need to provide your own credentials for Google Oauth Login and a MongoDB connection string (See `.env.example`), you can get your user crendentials from [Google's Developer Console](https://console.developers.google.com/?hl=ES) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) offers a really good free tier setup to get things started.

## Deploy
To deploy the server you can follow [Heroku's guide on deploying with Git](https://devcenter.heroku.com/articles/git)
