/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Roman Tiulmankov";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var spaceIndex = finalName.indexOf(" ");
    var firstName = finalName.substring(0,1).toUpperCase()+finalName.substring(1,spaceIndex).toLowerCase();
    var lastName = finalName.substring(spaceIndex).toUpperCase();
    finalName = firstName.concat(lastName);
     
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));



