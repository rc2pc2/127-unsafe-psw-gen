// Chiedi all’utente/essa il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito 

const userFirstName = prompt('Type your first name');
const userLastName = prompt('Type your last name');
const userFavColour = prompt('Type your favourite colour');

console.log(userFirstName, userLastName, userFavColour);

// dot notation
document.getElementById('output').innerHTML = `${userFirstName}${userLastName}${userFavColour}24`; 
// document.getElementById('output').innerHTML = userFirstName + userLastName + userFavColour + 24; 
// document.write(userFirstName + userLastName + userFavColour + 24); 