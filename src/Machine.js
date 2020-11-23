class Machine {
  constructor() {
    this.snacks = []
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory, inventory2) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
        
    this.snacks.push(inventory);
    this.snacks.push(inventory2)
    
    
  }
  removeItem(itemToDelete) {
    let indexOfitem = this.snacks.indexOf(itemToDelete)
    this.snacks.splice(indexOfitem, indexOfitem+1);
  }
}

module.exports = Machine

