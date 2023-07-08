# Angular OMDB The Movie App

This project is an Angular application that utilizes the OMDB API to fetch and display movie information. The app allows users to search for movies by title and view details such as the title, year, plot, and poster image.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Technologies](#technologies)

## Features
- Search movies by title
- Navigate to all results returned based on the title  
- Display movie details including title, year, plot, and poster image
- Responsive layout for mobile and desktop devices

## Prerequisites
Make sure you have the following installed before setting up the project:
- Node.js (version >= 18)
- Angular CLI (version >= 16)

## Installation
1. Clone the repository: `git clone https://github.com/marskop/the-movie-app.git`
2. Change to the project directory: `cd the-movie-app`
3. Install the dependencies: `npm install`

## Configuration
To use the OMDB API, you need to obtain an API key. Follow these steps to configure the application:
1. Go to [OMDB API](http://www.omdbapi.com/) and sign up for an account.
2. Once signed in, you will receive an API key.
3. Create a file `src/environments.ts`.
4. Add the following code:
   ```typescript
   export const environment = {
     production: false,
     omdbApiKey: 'YOUR_API_KEY_HERE'
   };
   ```
   Replace `'YOUR_API_KEY_HERE'` with your actual API key.

## Usage
To start the application, run the following command:
```
ng serve
```
Then, open your browser and navigate to `http://localhost:4200/`.

## Components
- **SearchComponent**: Provides a search input field and button for users to search movies.
- **CategoryFilterComponent**: Provides a dropdown to filter movies based on category.
- **MovieListComponent**: Displays a list of movies based on the search term provided.
- **MovieDetailsComponent**: Displays detailed information about a selected movie.

## Services
- **MovieService**: Handles the communication with the OMDB API to fetch movie data.
- **ThemeService**: Toggles the theme between light and dark.

## Technologies
The application is built using the following technologies:
- Angular version 16.1.4
- OMDB API

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).