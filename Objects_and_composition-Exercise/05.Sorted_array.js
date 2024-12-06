function createSortedList(){
    return {
      add: function(number) {
        if (typeof(number) == 'number') {
          this._sortedList.push(number);
          this.size = this._sortedList.length;
          this._sortedList.sort(this._sortArray);
        }
      },
      remove: function(index) {
        if (index < 0 || index >= this.size) {
          return;
        }
        this._sortedList.splice(index, 1);
        this._sortedList.sort(this._sortArray);
        this.size = this._sortedList.length;
      },
      get: function(index) {
        if (index < 0 || index >= this.size) {
          return;
        }
        return this._sortedList[index];
      },
      size: null,
      _sortedList: [],
      _sortArray: (a, b) => a - b,
    }
  }
  
  let list = createSortedList();
  
  list.add(5);
  
  list.add(6);
  
  list.add(7); console.log(list.get(1)); list.remove(1); console.log(list.get(1));
