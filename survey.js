const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sQ = [//survey questions
  'What are you referred to as?',
  'Which planet are you from?',
  'What is your species?',
  'When you arent in the vacuum of space, what music do you listen to?',
  'What\'s your favorite activity?',
];

const sA = [// survey answers
//[0]: name
//[1]: location
//[2]: species
//[3]: favorite music
//[4]: favorite activity
];

//question 0
rl.question(`${sQ[0]} > `, (answer) => {
  sA.push(answer);
  //question 1
  rl.question(`${sQ[1]} > `, (answer) => {
    if (answer.toLowerCase() !== 'earth') {
      console.log('Sorry, this survey is only for beings from \'Earth\'.');
      rl.close();
      return;
    } else
      sA.push(answer);
    //question 2
    rl.question(`${sQ[2]} > `, (answer) => {
      if (answer.toLowerCase() !== 'human') {
        console.log('Sorry, this survey is only for a \'human\'.');
        rl.close();
        return;
      } else
        sA.push(answer);
      //question 3
      rl.question(`${sQ[3]} > `, (answer) => {
        sA.push(answer);
        //question 4
        rl.question(`${sQ[4]} > `, (answer) => {
          sA.push(answer);
          //console output
          console.log(`${sA[0]} is a ${sA[2]} denzien of ${sA[1]}. When there is a connected medium in which vibrations can travel they tune into ${sA[3]}, and they very much enjoy ${sA[4]}.`);
          rl.close();
        });
      });
    });
  });
});