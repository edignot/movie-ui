# Movie Search Engine

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c2f3a09-b500-460f-8647-122f0fcfeacc/deploy-status)](https://app.netlify.com/sites/mmoovviieess/deploys)

## https://mmoovviieess.netlify.app/

![Movie Search Engine](/moviesmockup.jpg)

## About:

:movie_camera: This is a MERN full-stack application that pulls movie data from downstream[`The Movie Database API`](https://developers.themoviedb.org/3/getting-started/introduction) API, displays trending movies, and allows users to search movies by name, up-vote, and down-vote movies.

## Completed MVP User Stories:
- [x] A user should be able to search movie by title and see all results mattching the search input.
- [x] A user should be able to click through pages if more than 20 results match search input, trending movies or voted movies.
- [x] A user should be able to see total amount of pages and total amount of found movies.
- [x] A user should be able to click on any movie and see additional info about.
- [x] A user should be able to up-vote or down-vote a movie and all movies that has any votes should be stored to the database.
- [x] A user should be able to see all movies that has any votes by clicking 'voted movies' button.
## Goals Achieved:
- [x] BE server is deployed to Heroku and FE is deployed to Netlify.
- [x] BE Express server created and connected to MongoDB.
- [x] BE API endpoints are tested.
- [x] FE unit tests added to all components and some integrations tests.
- [x] Redux reducers and action creators tested.

## Future User Stories and goals:
- [ ] A user should be able to filter movies by language, genre, release date, etc.
- [ ] A user should be able to login, only see personal voted movies and only be able to vote once for one movie. 
- [ ] A user should be able to sort movies by date.
## Future Goals:
- [ ] Implement user login and authentication.
- [ ] Implement PWA features, make app downloadable.
- [ ] Make application fully responsive, check all breaking points and fix issues.
- [ ] Add more front end integration tests and async tests, mock API calls

## FE Tech Stack:
- `Javascript | ES6`
- `React | React Hooks`
- `Redux | Redux Thunk`
- `Axios`
- `Jest | React Testing Library`
- `CSS`
- `Netlify CI`

## BE Tech Stack:
- `Node | Express`
- `MongoDB | Mongoose | MongoDB Could Atlas`
- `Node Fetch`
- `Jest | Supertest | Nock`
- `Heroku`

## File Structure:
### [`BE SERVER repo`](https://github.com/edignot/movie-api)
### [`FE UI repo`](https://github.com/edignot/movie-ui)
  #### Redux Setup
    [`Reducers`]()
    [`Action Creators`]()


## FE Development Instructions:
- [clone FE repo](https://github.com/edignot/movie-ui)
- run `npm i`
- run `npm start`
- open `http://localhost:3000`

## BE Development Instructions:
- [clone BE repo](https://github.com/edignot/movie-api)
- run `npm i`
- run `npm start`
- open `http://localhost:5000`

## Contributors:
- [Edita Ignot](https://github.com/edignot)
