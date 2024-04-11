function randomNumGen(num) {
    return Math.floor(Math.random() * num)
};

/* Available  data types */

const youAre = ['fat', 'lazy', 'stupid', 'ignorant', 'ugly'];
const youHave = ['no friends', 'massive debt', 'no hobbies', 'no life', 'big ears', 'AIDS'];
const youWill = ['never amount to anything', 'die a horrible death', 'lose everything', 'get impeached', 'suffer disaster'];

/* prints insults to console */

console.log(`You are ${youAre[randomNumGen(youAre.length)]} and you have ${youHave[randomNumGen(youHave.length)]} and you will ${youWill[randomNumGen(youWill.length)]}`)

