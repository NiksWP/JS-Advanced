function solve() {
    const textAreaRef = document.getElementById('input');
    const resRef = document.getElementById('output');
  
    const income = textAreaRef.value.split('.').filter(el => el.length > 1);;
    for (let i = 0; i < income.length; i+=3) {
      let res = [];
  
      for (let j = 0; j < 3; j++) {
        if (!income[i + j]) {
          break;
        }
        res.push(income[i + j]);
      }
      let p = document.createElement("p");
      p.textContent = res.join('.') + '.';
      resRef.appendChild(p);
    }
}
