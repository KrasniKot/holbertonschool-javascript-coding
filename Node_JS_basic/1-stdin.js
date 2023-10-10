console.log('Welcome to Holberton School, what is your name?');

process.stdin.once('readable', () => {
  const inpt = process.stdin.read();
  if (inpt) { console.log(`Your name is: ${inpt.toString().trim()}`); }
});

process.stdin.on('end', () => { console.log('This important software is now closing'); });
