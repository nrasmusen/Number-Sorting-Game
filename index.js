var arr = [2, 1, 3, 4, 5, 6, 7, 8, 9];
var userInput = 0
var run = true;
var tempArr = [];
var sorted = false;

scramble(arr);

while (run) {
  if (!isSorted(arr)) {
    console.clear();
    console.log("Sorting Game (input QUIT to quit game)");
    console.log("Numbers:");
    console.log(arr);
    console.log("");
    userInput = prompt("Input amount to be flipped ");

    if (userInput == "QUIT") {
      run = false;
    }
    else if (userInput < 10) {
      sortGame(userInput);
    }
    else {
      console.log("Incorrect input")
    }
  }
  else {
    console.clear();
    console.log("list sucessfully ordered")

    userInput = prompt("Input REPLAY to replay game ");
    if (userInput != "REPLAY") {
      run = false;
    }
    else {
      scramble(arr);
      isSorted(arr);
    }
  }
}


function sortGame(userInput) {
  tempArr = arr.slice(0, userInput);
  arr.splice(0, userInput);

  for (let i = 0; i < tempArr.length; i++) {
    arr.unshift(tempArr[i]);
  }

}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function scramble(arr) {
  for (i = 0; i < 100; i++) {
    var num1 = Math.floor(Math.random() * arr.length);
    var num2 = Math.floor(Math.random() * arr.length);

    var temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
  }
}




