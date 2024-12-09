function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    const inputRef = document.getElementById('searchField');
    const tableRowRef = document.querySelectorAll('tbody tr');
    function onClick() {
       let searchText = inputRef.value;
       inputRef.value = '';
 
       for (let row of tableRowRef){
          const tableDataRef = row.querySelectorAll('td');
          for (let data of tableDataRef){
             if (data.textContent.includes(searchText) && searchText !== '') {
                debugger
                row.classList.add("select");
                break;
             }
             else{
                row.classList.remove("select");
             }
          }
       }
    }
 }
 