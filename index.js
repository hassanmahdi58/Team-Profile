
const inquirer = require("inquirer");
const fs = require("fs");



const employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



const teamprofiles =[];

function team(){
    inquirer.prompt([
        {
            name:'team',
            type:'confirm',
            message: 'confirm your team please ?', 
        }
    ])
    .then((res, err) => {
        if (err) console.error(err);
        if (res.team) {
           addManager();
        } else {
            process.exit();
        }
    });
}

function addManager() {
	inquirer
		.prompt([
			{
                type: 'input',
				name: 'name',
				message: "Enter Manager's name:",
			},
			{
                type: 'input',
				name: 'id',
				message: "Please Enter the ID number for the  Manager:",
			},
			{
                type: 'input',
				name: 'email',
				message: "Enter the email address for the Manager.",
				
			},
			{
				type: 'input',
                name: 'officeNumber',
				message: "Enter Manager's office number:",
				
			},
			{
                type: 'confirm',
				name: 'nextEmp',
				message: 'Do you want to add another employee?',
			},
		])
		
		.then((res, err) => {
			if (err) console.error(err);
			const newManager = new Manager(
				res.name,
				res.id,
				res.email,
				res.officeNumber
			);
			
			teamprofiles.push(newManager);

			if (res.nextEmp) {
				newMember();
			} else {
				console.log(teamprofiles);
				renderTeam();
			}
		});
}

function newMember() {
	inquirer
		.prompt([
			{
				type: 'list',
                name: 'empType',
				message: 'Select the role for the employee:',
				choices: ['Engineer', 'Intern',  'Exit'],
			},
		])
		.then((res, err) => {
			if (err) console.error(err);
			switch (res.empType) {
				case 'Engineer':
					addEngineer();
					break;
				case 'Intern':
					addIntern();
					break;
				case 'Exit':
					renderTeam();
			}
		});
}


function addEngineer() {
	inquirer.prompt([
			{
                type: 'input',
				name: 'name',
				message: "Add your Engineer's name?",
			},
			{
				type: 'input',
                name: 'id',
				message: "Add your Engineer's Employee ID number:",
			},
			{
                type: 'input',
				name: 'email',
				message: "Add your Engineer's email address:",
			},
			{
                type: 'input',
				name: 'gitHub',
				message: "Add your Engineer's GitHub username:",
			},
			{
                type: 'confirm',
				name: 'nextEmp',
				message: 'Add more employee',
			},
		])
		.then((res, err) => {
			if (err) console.error(err);
			const newEngineer = new Engineer(
				res.name,
				res.id,
				res.email,
				res.gitHub
			);
			teamprofiles.push(newEngineer);
			if (res.nextEmp) {
				newMember();
			} else {
				renderTeam();
			}
		});
}


function addIntern() {
	inquirer
		.prompt([
			{
                type: 'input',
				name: 'name',
				message: "Add your Intern's name",
			},
			{
                type: 'input',
				name: 'id',
				message: "Add Intern's Employee ID number:",
			},
			{
				type: 'input',
                name: 'email',
				message: "Add Intern's email address:",
			},
			{
				type: 'input',
                name: 'school',
				message: "Add your Intern's School:",
			},
			{
				name: 'nextEmp',
				type: 'confirm',
				message: 'Add more Employee?',
			},
		])
		.then((res, err) => {
			if (err) console.error(err);
			const newIntern = new Intern(
				res.name,
				res.id,
				res.email,
				res.school
			);
			teamprofiles.push(newIntern);
			console.log(teamprofiles);
			if (res.nextEmp) {
				newMember();
			} else {
				renderTeam();
			}
		});
}


function renderTeam() {
	const indexhtml = [];

    const index2 = `
    <!DOCTYPE html>
    <html lang="en">
    
    <header>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profiles</title>
		<link rel="stylesheet" href="./style.css">
    </header>
    
    <body>
    <div class="jumbotron display-6 font-weight-bold text-light text-center">
    <h1>TEAM PROFILES</h1>
	<svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
	<path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
  </svg><p>together we can make a difference</p>
</div>

<div class="container  justify-content-center">

    <div class="d-flex flex-wrap justify-content-center"> `


    indexhtml.push(index2);

    for (let i = 0; i < teamprofiles.length; i++) {
       
        if (teamprofiles[i].officeNumber) {

             teamprofiles.innerHTML=
                `            <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                <div class="card-body bg-primary text-light">
                    <h4 class="card-header">Name: ${teamprofiles[i].name}</h4>
                    <h4 class="card-title">${teamprofiles[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamprofiles[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamprofiles[i].email}">${teamprofiles[i].email}</a></li>
                    <li class="list-group-item">Phone Number: ${teamprofiles[i].officeNumber}</li>
                </ul>
            </div>`;

        }  if (teamprofiles[i].github) {

            teamprofiles.innerHTML +=
                `
                <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                <div class="card-body bg-warning text-light">
                    <h4 class="card-header">Name: ${teamprofiles[i].name}</h4>
                    <h4 class="card-title">${teamprofiles[i].getRole()}</h4>
                </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamprofiles[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${teamprofiles[i].email}">${teamprofiles[i].email}</a></li>
        <li class="list-group-item"><a href="${teamprofiles[i].getGithub()}" target= "_blank">GitHub</a></li>
        </ul>
    </div>
    `

        } if (teamprofiles[i].school) {

            teamprofiles.innerHTML +=
                `
        <div class="card text-center ml-4 mr-4 mb-5 border-dark">
        <div class="bg-success p-2 text-white bg-opacity-75">
        <h4 class="card-header">${teamprofiles[i].name}</h4>
        <h4 class="card-title">${teamprofiles[i].getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamprofiles[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${teamprofiles[i].email}">${teamprofiles[i].email}</a></li>
        <li class="list-group-item">School: ${teamprofiles[i].school}</li>
        </ul>
    </div>;
        `

        }
    }

  `
        </div>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </body>
        </html>
        `

    indexhtml.push(teamprofiles.innerHTML);

    fs.writeFile("./dist/index.html", indexhtml.join(""), function (err) {
        err ? console.error(err) : console.log('Your team has been generated!')
    })
}
team();