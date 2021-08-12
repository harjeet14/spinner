process.stdout.write('hello from spinner1.js\r➡ d2 node \n');

let time = 100;

for (let index = 0; index < 2; index++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time);
  time += 200;
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, time);
  time += 200;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, time);
  time += 200;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\ ');
  }, time);
  time += 200;
}
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|\n ');
}, time)
time += 200;
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r➡️ d2');
}, time);
