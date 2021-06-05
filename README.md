# <strong><p style="text-align: center">Good Drinks</p></strong>

## This application allows you to search and filter recipes of drinks, so that you can do your own!
<br>

![app-gif](.github/app-gif.gif)


### 🔎 <strong>Installing dependencies</strong>

First things firt, you must clone this repository to your machine, with the following command in Git:

```shell
git clone https://github.com/giuliabriao/bons-drinks-modulo4-resilia.git
```
Now, install the dependencies of the project writting this:

```shell
npm install
```

### 🔎 <strong>How to run</strong>

Write `npm start` in your terminal and it will locally run the application, allowing you to navigate between the pages and checking the funcionalities.

### 📌 <strong>About the project</strong>

This application has these minimum requisits:

- [x] Use endpoints from a [Drinks API](https://www.thecocktaildb.com/api.php) for searching and filtering;
- [x] Use the `react-router-dom` library
- [x] Have the following pages: 
    - [x] Homepage 
    - [x] Contact with forms
    - [x] Our team
    - [x] About us
    - [x] Drinks page, showing the 10 most popular ones, their informations through modal and also the possibility to search a drink by name and filtering by some categories.

This was a month long project built during my fourth and last module at Resilia Educacao, a 6 months bootcamp. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to navigate through different endpoints and the most important: search and filter recipes of drinks from an API specific for that purpose. I started this process by using the create-react-app boilerplate, then adding `react-router-dom` and `react-icon` libs.

One of the main challenges I ran into was learning how to manipulate states, hooks and props from components to components. Not only did the course give me the tools to consume the API and render on screen, it led me to spending several days searching online and asking my friends for help.

I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into the React logic itself. In the next iteration, I plan on showing the infos of filtered drinks in the modal, since the API doesn't provide complete info for filtered drinks.

### 🚀 <strong>Technologies</strong>
The following technologies were used in the projects construction:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
