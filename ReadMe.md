      INSTALLATION

first unzip the folder and open with code editor (vscode).

open a terminal to the root directory.

type 'npm install'. this should install all the dependencies.

next, navigate to src/database/config and open the config.js file

enter your database details accordingly for the development environment

then type 'npm run migrate' in the terminal to create the database tables.

to start the service, type 'npm run dev'.

the app should be up and running now.

MY ASSUMPTIONS AND THOUGHT PROCCESS TO ATTEMPTING THE ASSESSMENT

for the sake of a building a simple service, i assumed the users have already been registered and authenticated through out the process of accessing the service. the idea was to make this as simple as possible in the shortest possible time with room for improvement. i may not have been able to complete this assessment the way i would have loved to but i tried my possible best to attempt every key functionality as astated in the document.

used node.js(express) with mysql
created endpoints and services that are also graphql adaptable.
unit test for each service function
drew a class diagram of the following tables:
books
cart
likes
ratings

in terms of issues faced during the assessment, it would be my inability to access good power supply and the current situation of the country made it difficult to make use of the make use of the alternative available. i did however encounter a database fetch error which was simply solved by executing this query in the database server query window:
"SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY', ''));"

I enjoyed working on this assessment a lot, almost got lost in it.

This is an aawesome way of getting to know what applicants are made of. I believe more time could be given to allow applicants attempt the assessment as well carry on with their other daily activities without sacrificing one for the other. adding a personal twist to the use case or asking to make the product be tailored to a personal goal or service they would want to achieve.

Thank you.
