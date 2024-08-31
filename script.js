const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function countDownAndUp(number) {
    console.log(number);
    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number -1);
        console.log(number);
    }
}

countDownAndUp(3);

const decimalToBinary = (input) => {
    if (input === 0) {
        return "0";
    }
    else if (input === 1) {
        return "1";
    } else {
        return (decimalToBinary(Math.floor(input / 2)) + (input % 2));
    }
};


const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  result.textContent = decimalToBinary();
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        checkUserInput();
    };
});