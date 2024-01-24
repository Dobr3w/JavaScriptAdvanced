function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  const resultRef = document.getElementById('result');
  let result = '';

  if (currentCase == "Camel Case") {
    let textArr = input.split(' ');
    result = textArr.shift();
    textArr.forEach(element => {
      result += element.charAt(0).toUpperCase() + element.substring(1);
    });
  } else if (currentCase == "Pascal Case") {
    let textArr = input.split(' ');
    textArr.forEach(element => {
      result += element.charAt(0).toUpperCase() + element.substring(1);
    });
  } else {
    result = "Error!";
  }

  resultRef.textContent = result;
}