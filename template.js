
// Main function
function runProgram(input){
    var a = Number(input);
}

// Reading the stream connected to stdin
process.stdin.resume();

// Encoding to be done in ascii format
process.stdin.setEncoding("ascii");
let read = "";

// Appending the input to read
process.stdin.on("data", function (input) {
   read += input;
});

// On end of process, running the runProgram with read as argument
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

// On interruption
process.on("SIGINT", function () {
   // Running runProgram with read as argument
   read = read.replace(/\n$/,"")
   runProgram(read);

   // Exiting the program
   process.exit(0);
});