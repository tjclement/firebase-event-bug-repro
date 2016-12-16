/**
 * Created by tom on 16/12/2016.
 */

let firebase = require('firebase');
let database = firebase.initializeApp({ databaseURL: 'https://bizboard-perftest.firebaseio.com' }).database();

console.time('first_event');
let firstFired;

console.log('Subscribing to child_added on small data set');

/* Notice the query that limits to 500 entries */
database.ref('data').limitToFirst(50).on('child_added', () => {
    if(!firstFired){
        firstFired = true;
        console.log('It took this long to receive the first child_added:');
        console.timeEnd('first_event');
        process.exit(0);
    }
});