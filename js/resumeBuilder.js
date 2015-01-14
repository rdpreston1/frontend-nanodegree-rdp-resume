//a place to store and display information and contact methods for the subject of the resume
var bio = {

  "name"      : "Robert Preston",
  "role"      : "Support Engineer",
  "contacts"  : {
    "mobile"    : "218.409.5474",
    "email"     : "rdpreston1@hotmail.com",
    "github"    : "rdpreston1",
    "twitter"   : "@BobPreston",
    "location"  : "Covington, GA"                              
  },
  "biopic"   : "images/fry.jpg",
  "welcomeMessage"   : "Hi, Welcome to my online resume. I'll attempt to be succinct and to the point.",
  "skills"    : [
    "Telecom Technical Support", "Linux/Unix Platforms", "Sigtran, SIP and SS7 Signaling", "Troubleshooting"
  ],

  //formatting and displaying generic contact information 
  "display" : function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);

      for (skill in bio.skills) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills:last").append(formattedSkill);
      }  
    }
  },

  //contact info will be displayed in header and footer area of main page
  "displayContacts" : function(elLocation) {

    var contactPos = elLocation;

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $(contactPos).append(formattedMobile);
    $(contactPos).append(formattedEmail);
    $(contactPos).append(formattedGitHub);
    $(contactPos).append(formattedTwitter);
    $(contactPos).append(formattedLocation);
  }
}

//object for storing and displaying current and past job history
var work = {

  "jobs" : [
  {
    "employer"  : "AT&T Mobility",
    "title"     : "Senior Specialist-Network Support",
    "location"  : "Covington, GA",
    "dates"     : "February 2011 - Current",
    "description" : "Monitoring and troubleshooting alrms in 2G/3G/LTE portion of AT&T's core network"  
  },
  {
    "employer"  : "Full-Time Student",
    "title"     : "Student",
    "location"  : "Pocatello, ID",
    "dates"     : "January 2009 - December 2010",
    "description" : "Obtained an Associate of Applied Science in Laser Electro Optics Technology."
  },
  {
    "employer"  : "Individual Client",
    "title"     : "Homecare Provider",
    "location"  : "Poteau, OK",
    "dates"     : "April 2003 - October 2008",
    "description" : "Acted as primary care provider for elderly and ailing patient, addressing administrative, healthcare, and transportation needs."  
  },
  {
    "employer"  : "Ericsson",
    "title"     : "Master Support Engineer",
    "location"  : "Plano, TX",
    "dates"     : "September 1991 - April 2003",
    "description" : "Executed second-line support operations for digital switching systems across key global regions including North America, Asia/Pacific, and Europe/Africa. Performed troubleshooting and developed solutions utilizing expansive range of support tools."
  },
  {
    "employer"  : "NEC",
    "title"     : "Technical Support Engineer",
    "location"  : "Irving, TX",
    "dates"     : "January 1986 - September 1991",
    "description" : "Support operations for NEC's digital switching systems deployed across the USA. Performed troubleshooting and developed solutions utilizing expansive range of support tools."
  }
  ],
//function to format and output work history to web page
  "display" : function(){

    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart); 

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}    

//    
var education = {

  "schools" : [
  { 
    "name"        : "Idaho State University",
    "dates"        : 2010,
    "location"    : "Pocatello, ID",
    "degree"      : "Associate of Applied Science",
    "majors"       : "Lasers and Electro Optics",
    "url"        : "http://www.isu.edu/"
  },
  {
    "name"        : "North Lake College",
    "dates"        : 1991,
    "location"    : "Irving, TX",
    "degree"      : "Computer Science Coursework",
    "majors"       : "NA",
    "url"        : "http://www.northlakecollege.edu/Pages/default.aspx"
  },
  {
    "name"        : "Devry Institute of Technology",
    "dates"        : 1983,
    "location"    : "Irving, TX",
    "degree"      : "Technical Diploma in Electronics",
    "majors"       : "Electronics",
    "url"        : "http://www.devry.edu/universities/texas/irving-campus.html"
  }
  ],
  "onlineSchools" : 
  [
  {
    "title"       : "Front-End Web Developer Nanodegree",
    "school"      : "Udacity",
    "date"        : 2015,
    "url"        : "http://www.udacity.com"
  }
  ],

  "display" : function() {
    
    for (school in education.schools) {
      
      $("#education").append(HTMLschoolStart);

      var formattedUrl = HTMLschoolName.replace("#", education.schools[school].url);
      var formattedName = formattedUrl.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedMajor);
    }
    
    if(education.onlineSchools.length > 0) {
      
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      
      for (school in education.onlineSchools) {

        var formattedOnTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools[school].title);
        var formattedOnTitleUrl = formattedOnTitle.replace("#", education.onlineSchools[school].url);
        var formattedOnSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[school].school);
            
        var formattedOnTitleSchoolUrl = formattedOnTitleUrl + formattedOnSchool;
        $(".education-entry:last").append(formattedOnTitleSchoolUrl);

        var formattedOnDates = HTMLonlineDates.replace("%data%", education.onlineSchools[school].date);
        $(".education-entry:last").append(formattedOnDates);

        var formattedOnUrl = HTMLonlineURL.replace("%data%", education.onlineSchools[school].url);
        $(".education-entry:last").append(formattedOnUrl);      

      }      
    }
 
  }
}

var projects = {

  "websites" : [
  {
    "title"       : "Health by Oils Website",
    "dates"       : "January 2015 - Current",
    "description" : "Website to provide support and product information for downline team.",
    "images"      : [
      "images/gift.jpg",
      "images/cardamom.jpg",
      "images/lemon.jpg"
    ]
  },
  {
    "title"       : "Orchard Grove Neighborhood Website",
    "dates"       : "January 2015 - Current",
    "description" : "Website to provide information to residents of our Neighborhood.",
    "images"      : [
      "images/orchard_park_1.jpg",
      "images/orchard_park_2.jpg",
      "images/town_square.jpg"
    ]
  },
  {
    "title"       : "AT&T, MTRC Core Home Page",
    "dates"       : "January 2015 - Current",
    "description" : "Website to provide support, information, and assistance for members of Core Network Operations Group.",
    "images"      : [
      "images/att.jpg",
      "images/att_wireless.jpg",
      "images/att_coverage.png"
    ]
  }
  ],

  "display" : function() {

      $("#projects").append(HTMLprojectStart); 

    for (sites in projects.websites) {
//      $("#projects").append(HTMLprojectStart); 

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.websites[sites].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.websites[sites].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.websites[sites].description);
      $(".project-entry:last").append(formattedDescription);
      
      for (var i = 0; i < projects.websites[sites].images.length; i++) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.websites[sites].images[i]);
        $(".project-entry:last").append(formattedImages);
      }  
    }
  }  
}

//display introductory information 
bio.display();

//set header location for displaying contact information function
var elLocation = "#topContacts";
bio.displayContacts(elLocation);

//display ongoing projects
projects.display();

//display work experience along with current and past employers
work.display();

//display formal schooling
education.display();

//display map
$("#mapDiv").append(googleMap);

//set footer location for displaying contact information function
var elLocation = "#footerContacts";
bio.displayContacts(elLocation);


/* Use this function if International surname formatting needed.

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+ name[1];
}  

inName("bio.name");

$("#main").append(internationalizeButton);*/

