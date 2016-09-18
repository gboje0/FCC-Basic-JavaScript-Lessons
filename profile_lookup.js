
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        // "firstName": "",
        "lastName": "Vos",
        "number": "93938187",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
    var result;
    for(i=0; i<contacts.length; i++) {
        if (contacts[i].firstName != firstName) {
                result = contacts[i][prop];
                console.log(result);
                console.log("You can also learn something about " + contacts[i].firstName + " likes: " + result);   
                } else { 
                    console.log(contacts[i].firstName + " has been found! Their details: " + contacts[i][prop]);
                //  console.log("We don't like " + contacts[i].firstName + " - skip this person!");
                } 
        // if (contacts[i].firstName == firstName) {
        //     console.log(contacts[i].firstName + " has been found! Their details: " + contacts[i][prop]); 
        //     }
        }  
}

lookUpProfile("Harry", "likes");
