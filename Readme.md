# Blockchain-Based-Voting-System

# Prerequisites
1. MySQL
2. Nodejs
3. React
4. npm
5. Ganache

# Setting up the Environment

# a) Frontend & Backend Setup
1. Change directory to frontend
2. Run `npm i` to install dependencies.
3. Change directory to backend
4. Run `npm i` to install dependencies.

# b) Contract Setup
1. Navigate to the backend directory
2. Run command `npx truffle migrate`.
3. In case, the command doesn't work, you will need to install `truffle` explicitly using the command `npm install -g truffle`. You might  need to initialize it also if the error occurs in the following steps using command `truffle init`.
4. Once the command runs, you will see Blocks and Transactions in Ganache.
5. Type command `npm run typeorm migration:run`

# c) Ganache Setup
1. Open a new workspace in Ganache
2. Name the project as `bbvs` and Add Project using the file in `backend\truffle-config.js`
3. Start Project.

# d) MySQL Setup
1. Open a terminal in the project directory and start mysql using command `sudo mysql`.
2. Type command `create user bbvs@localhost identified with mysql_native_password by 'Password00$$';`. Make sure the Password is the same as the one in `backend/ormconfig.json`.
3. Type command `grant all privileges on *.* to bbvs@localhost;`
4. Type command `select user from mysql.user` to confirm.
5. Type command `create database bbvs;`.
6. Type command `use bbvs;`.
7. Type command `show databases;` to confirm.

# e) Adding the .env file
1. Create a file in the backend directory named as `.env` and add the following code:
`
ACCESS_TOKEN_SECRET=976a66a5bd23b2050019f380c4decbbefdf8ff91cf502c68a3fe1ced91d7448cc54ce6c847657d53294e40889cef5bd996ec5b0fefc1f56270e06990657eeb6e

REFRESH_TOKEN_SECRET=5f567afa6406225c4a759daae77e07146eca5df8149353a844fa9ab67fba22780cb4baa5ea508214934531a6f35e67e96f16a0328559111c597856c660f177c2
`

# e) Running the Project
1. Navigate to the backend directory and type `npm start`.
2. Navigate to the frontend directory and type `npm start`

# The project is running successfully. 

