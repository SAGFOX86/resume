var bio = {
"name" : "Steven Gallitz",
"role" : "ATT Wire Tech",
"contacts" : {
"mobile" : "(704)917-8833",
"email" : "sagfox86@yahoo.com",
"twitter" : "@XXfoxinsoXX",
"github" : "sagfox86",
"location" : "Charlotte NC",
},
"welcomeMessage" : "this is my live working resume!",
"bioPic" : "images/selfie.png",
"skills": [
	"Windows Proficient ", " HTML and CSS Basics ", " Networking Basics ", " JavaScript Basics"
	],
};
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

//start of education section
var education = {
 "schools":[
 {
 "name": "USC of Columbia",
 "location": "Columbia SC",
 "degree": "BA",
 "majors": "Computer Engineering",
 "dates": "2005-inc",
 "url": "http://www.sc.edu"
 },
 {
  "name": "Dutch Fork High School",
  "location": "Irmo SC",
  "degree": "HS Diploma",
  "majors": "N/A",
  "dates": "2001-2005",
  "url": "http://www.lexrich5.org/DutchForkHS.cfm"
 }
 ],
 "onLineCourses":[
 {
 "title": "Front End Web Design",
 "school": "Udacity",
 "dates": "2014 - currently",
 "url": "http://www.udacity.com"
 },
 {
 "title": " intro to html and css",
 "school": "Udacity",
 "dates": 2014,
 "url": "http://www.udacity.com"
 },
 {
 "title": "using github",
 "school": "Udacity",
 "dates": 2014,
 "url": "http://www.udacity.com"
 },
 {
 "title": "JavaScript Basics",
 "school":"Udacity",
 "dates": 2014,
 "url": "http://www.udacity.com"
 }
 ]
 }
education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 }
 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.onLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
}
}
education.display();

//start of work section

var work = {
 "jobs": [
 {
 "employer": "ATT Uverse",
 "location":"Charlotte, NC",
 "title": "Wire Tech",
 "dates": "2012-Current",
 "description": "Install and Maintain Uverse Services...",
 "url": "http://www.uverse.com"
 },
 {
 "employer": "Food Lion",
 "location": "Gastonia, NC",
 "title": "Grocery Manager",
 "dates": "2006-2012",
 "description": "Handle Every Aspect of Store, Build Displays, Manage Employees, Stock Shelves, Maintain Positive Inventory",
 "url": "http://www.foodlion.com"
}
 ]
}
function displayWork(){
 for(job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);
 var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle; 
 $(".work-entry:last").append(formattedEmployerTitle);
 var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
 $(".work-entry:last").append(formattedLocation);
 var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 $(".work-entry:last").append(formattedDate); 
 var formattedDisc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 $(".work-entry:last").append(formattedDisc); 
 }
}
displayWork();

//Start of Projects Section
var projects = {
 "projects": [
 {
 "title": "Project 1",
 "dates": "2014",
 "description": "Create a website From PDF file image",
 "images":[
 "images/mug.jpg", "images/udacitylogo.png"],
 "url": "https://www.udacity.com/course/viewer/#!/c-nd001/l-2736698543/m-3190969644"
},
{
 "title": "project 2",
 "dates": "2014-now",
 "description": "create an online interactive resume!!!",
 "images":[
 "images/hiring.png" , "images/globe.png"],
 "url": "https://www.udacity.com/course/viewer/#!/c-nd001/l-2962818615/m-2959468555"
}
 ]
}

projects.display = function() {
 for (project in projects.projects) {
 $("#projects").append(HTMLprojectStart);
 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 var formattedProject = formattedTitle.replace("#",projects.projects[project].url);
 $(".project-entry:last").append(formattedProject);
 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 $(".project-entry:last").append(formattedDates);
 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 $(".project-entry:last").append(formattedDescription);
 if(projects.projects[project].images.length > 0) {
 for (image in projects.projects[project].images) {
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 $(".project-entry:last").append(formattedImage)
 }
 }
 }
}
projects.display();

// footer bio info

 $("#footerContacts").append(formattedMobile);
 $("#footerContacts").append(formattedEmail);
 $("#footerContacts").append(formattedTwitter);
 $("#footerContacts").append(formattedGithub);
 $("#footerContacts").append(formattedLocation); 

 $("#mapDiv").append(googleMap);

//Funtion to get click locations on page
$(document).click(function(loc) {
 var x = loc.pageX;
 var y = loc.pageY;

logClicks(x,y);
});
