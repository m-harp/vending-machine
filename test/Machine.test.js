const Machine = require('../src/Machine')

describe('The vending machine', () => {
  
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  xit('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  it('returns chex mix and Reeses when added to vending machine', () => {
   const vendingMachine = new Machine()
   let chexMix = {name: 'Chex Mix', price: 299}
   let reeses = {name: 'Reeses', price: 350}
   vendingMachine.stock(chexMix, reeses)
   expect(vendingMachine.seeSelections()).toEqual([chexMix, reeses])
  })
  it('Removes item from inventory', () =>{
     const vendingMachine = new Machine()
     let chexMix = {name: 'Chex Mix', price: 299}
     let reeses = {name: 'Reeses', price: 350}
     vendingMachine.stock(chexMix, reeses)
     vendingMachine.removeItem(reeses)
     expect(vendingMachine.seeSelections()).toEqual([chexMix])
   })

   
  



})










// someone attempts to stock without inventory
  // it('stocks nothing if there is no inventory passed', () => {
  //   // setup
  //   const vendingMachine = new Machine()

  //   // exercise
  //   vendingMachine.stock()

  //   // assertion
  //   expect(vendingMachine.seeSelections()).toEqual([])
  // })