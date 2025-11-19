let personRole = "subscriber";
let accessTo;

switch(personRole) {
    case "employee":
        accessTo = "Dietary Services";
        break;
    case "enrolled_member":
        accessTo = "Dietary Services and one-on-one interactions with dietician";
        break;
    case "subscriber":
        accessTo = "Dietary Services only";
        break;
    case "non_subscriber":
        accessTo = "None - need to enroll or at least subscribe first";
        break;
    default:
        accessTo = "NoRole"
};

let isAuthorized = accessTo === "NoRole" ? false : true;

if(isAuthorized) {
    console.log("This person has access to ", accessTo);
} else {
    console.log("Not authorized");
};
