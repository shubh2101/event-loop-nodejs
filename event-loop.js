const fs = require("fs");
setImmediate(() => console.log("Timer Immediate 1 finished"));
setTimeout(() => console.log("SetTimeout 1 finished"), 0);

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("---------");

  setTimeout(() => console.log("SetTimeout 2 finished"), 0);
  setTimeout(() => console.log("SetTimeout 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));
});

console.log("Hello from top level code");
