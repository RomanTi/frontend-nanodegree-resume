/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var name = "Roman Tiulmankov";
//var role = "Web Developer";

var bio = {
  "name" : "Roman Tiulmankov",
  "role" : "Systems Administrator",
  "welcomeMsg" : "Hi All! Your are on my Web Resume Page",
  "contacts": {
    "mobile": "647.111.1111",
    "email" : "roma.vt@gmail.com",
    "location" : "Toronto",
    "github" : "https://github.com/RomanTi"
  }
  ,
  "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAarAAAAJGY2NTlmYTdmLTUwNzgtNDIyNS04YjUyLTk4NDZmYWY1NDM1ZA.jpg",
  "skills" : ["Linux/Windows SysAdmin", "Network Admin", "Junior Web Web", "Junior Security Analyst"]

};

var education = {
  "schools": [
    {
      "name": "Saint-Petersburg State Polytechnical University",
      "city": "Saint-Petersburg, Russia",
      "degree": "Specialist",
      "major": "Radiotechnics and Telecommunications"
    },
    {
      "name": "Saint-Petersburg State Polytechnical University",
      "city": "Saint-Petersburg, Russia",
      "degree": "Specialist",
      "major": "Computer Networks"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "OANDA",
      "title": "Systems Administrator",
      "dates": "April 2013 - Future",
      "description": "Doing a lot of fun stuff - see projects",
      "location": "Toronto, Canada"
    },
    {
      "employer": "TOPS Consulting",
      "title": "IT Infrastructure Consultant",
      "dates": "January 2012 - February 2013",
      "description": "IT infrastructure Consulting for Dynamics CRM",
      "location": "Saint-Petersburg, Russia"
    },
  ]
};

var projects = {
  "projects": [
    {
      "title": "Project 1",
      "dates": "2012",
      "description": "Project 1 description"
    },
    {
      "title": "Project 2",
      "dates": "2013",
      "description": "Project 2 description"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}



function displaywork() {
  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
  var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkEmployer.concat(formattedWorkTitle));
  $(".work-entry:last").append(formattedWorkDates);
  $(".work-entry:last").append(formattedWorkDescription);
  }
}

displaywork();


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);



function inName(FullName) {
    var FullName = $('#name').html();
    var names = FullName.trim().split(" ");
    // Your code goes here!
    // Don't delete this line!
    return names[0] + " " + names[1].toUpperCase();
};

$("#main").append(internationalizeButton);

//$("#main").prepend(bio.certs);





