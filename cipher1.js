// given starter code 
// const emblemClue1="Eagle";
// const emblemClue2="Laurel";
// const emblemClue3 = 7;
let locationStart = "";
if (emblemClue1 === "Eagle"){
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion"){
    locationStart = "Colosseum";
}
else {
    locationStart = "Villa";
}
// deciphering the clue 
if (emblemClue2 === "Laurel" && locationStart === "Forum"){
    locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa"){
    locationStart += "of pompey";
}
// using the switch statemnent
switch (emblemClue3){
    case 7: 
    locationStart += "North";
    break;
    case 3:
        locationStart += "South";
        break;
    case 9:
        locationStart =+ "East";
        break;
    case 4:
        locationStart += "West";
        break;     
}
// using double equals (==) vs strict equals (===) in conditions is important due to strict equals requires for the statemnt and type to be true in order for the strict equals to structure the code correctly