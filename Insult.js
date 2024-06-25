function randomNumGen(num) {
    return Math.floor(Math.random() * num)
};

/* Available  data types */

const youAre = ['silly', 'lazy', 'goofy', 'ignorant', 'smelly'];
const youHave = ['no money', 'massive debt', 'no hobbies', 'no airplanes', 'big ears', 'inconsistent morals'];
const youWill = ['never be president', 'stub your toe', 'sit in traffic', 'get impeached', 'buy cracked eggs'];

/* prints insults to console */

console.log(`You are ${youAre[randomNumGen(youAre.length)]} and you have ${youHave[randomNumGen(youHave.length)]} and you will ${youWill[randomNumGen(youWill.length)]}`)

