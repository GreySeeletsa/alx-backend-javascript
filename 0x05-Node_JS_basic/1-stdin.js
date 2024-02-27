/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the user's name.
 *
 * When the user ends the program, a closing message is displayed
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
