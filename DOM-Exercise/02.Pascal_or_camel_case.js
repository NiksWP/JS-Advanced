function solve() {
    let textElement = document.getElementById('text');
    let conventionElement = document.getElementById('naming-convention');
    let resultElement = document.getElementById('result');
  
    let text = textElement.value;
    let convention = conventionElement.value;
  
    let textArr = Array.from(text.split(" "));
  
    let result = '';
    if (convention == 'Camel Case') {
      result = textArr.map(string => string.toLowerCase()).map((string, index) => {
        if (index == 0) {
          return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
      }).join("")
    }
    else if (convention == 'Pascal Case') {
      result = textArr.map(string => string.toLowerCase()).map((string, index) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }).join("")
    }
    else{
      result = 'Error!';
    }
    
    resultElement.textContent = result;
  }
