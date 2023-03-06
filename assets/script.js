var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomtopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics[0].length; x++) {
    console.log(topics[x]);
 }
}

function selecttopic() {
 if (randomtopic === 'HTML') {
    console.log("Let's study HTML!");
 } else if (randomtopic === 'CSS') {
    console.log("Let's study CSS!");
 } else if (randomtopic === 'Git') {
    console.log("Let's study Git!");
 } else if (randomtopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
 } else {
    console.log('Please try again!');
 }

}
