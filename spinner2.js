process.stdout.write('hello from spinner1.js\r➡ d2 node \n');

let spinTimer = function (time, value) {
  setTimeout(() => {
    process.stdout.write(value);
  }, time)


};
spinTimer(100, '\r|');
spinTimer(300, '\r/');
spinTimer(500, '\r-');
spinTimer(700, '\r\\');
spinTimer(900, '\r|\n ');
spinTimer(1100, '\r➡️ d2');


