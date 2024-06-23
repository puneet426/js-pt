//Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);    // () is IIFE is used to remove global scope problem
}) ();    // we have to end this immediate invoke so to add semicolon after ();
// chai(); // DB CONNECTED

( (name) => {     // simple IIFE
    console.log(`DB CONNECTED Two ${name}`);
} )('Puneet')