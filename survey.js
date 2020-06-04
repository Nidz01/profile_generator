const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)', (answer1) => {
  rl.question('Who is your favorite singer?', (answer2) => {
    rl.question('What is your favorite sports?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer4) => {
      let profile = (+answer1) + (+answer2);
      console.log(`${answer1} loves listening to ${answer2}, ${answer3} is all time favorite sports and ${answer4} is something that is in must-to-do list for everyday`);
      rl.close();
  });
});
});
});