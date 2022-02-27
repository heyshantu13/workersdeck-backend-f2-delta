<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://i.ibb.co/YtWf7hG/wdlogo.png" alt="Logo" width="250" height="180" >
</p>
Worker’s deck is Service on-demand platform to provide quality home services.
Worker’s deck connects users to working professionals for their home services.
Worker’s deck provides Painters, Carpenters, Electricians, Plumbers and
Cleaning Services, Packers and Movers.


Welcome! we hope you enjoy the site as much as we enjoyed making it.
 
  
<!-- TABLE OF CONTENTS -->
<br/>

# Table of Contents

1. [Documantation](#Documantation)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Authors](#authors)
5. [License](#license)

<br/>

# Documantation

[Documentation](https://documenter.getpostman.com/view/12791309/UVJYKz2U)


# Installation

1. Clone the repo
    ```sh
    git clone https://github.com/heyshantu13/workersdeck-backend-f2-delta wd-be
    ```

2. Install NPM packages
    ```sh
    cd  wd-be && npm install
    ```

3. Install CLI 
    ```sh
    npm install --save-dev sequelize-cli
    ```    
4. Set environment variables

    DB_HOST=localhost <br/>
    DB_USER=postgres  <br/>
    DB_DATABASE=workersdeck  <br/>
    DB_PASSWORD=password <br/>
    DB_PORT=0 <br/>
    APP_PORT=8080 <br/>

5. Migrate Database
    ```sh
    npx sequelize-cli db:migrate
    ```
6. Seed Data
    ```sh
    npx sequelize-cli db:seed:all
    ```

7. Open http://localhost:8080 to view it in the browser

8. Run Test cases
    ```sh
    npm test
    ```
<br/>

# Technology Stack

We tried to use a completely modern tech stack while testing out some new technologies that we had never used before. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

- [Node With Express JS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/master/)

<br/>

# Authors

- [Shantanu Kulkarni](https://github.com/heyshantu13)

<br/>

# License

[MIT](https://opensource.org/licenses/MIT)
