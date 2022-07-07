const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
  test('1) Create an spiderman object', () => {

    //Aquí escribimos el código que queremos usar tal cuál
    //Quiero poder instanciar un un objeto spiderman con esta información
      
    const tobeyMaguire = new Spiderman("Spiderman", 31, "Tobey Maguire", 3, "Columbia_Pictures")

    // Validamos que este código funcione de la forma esperada

    expect(tobeyMaguire.name).toBe("Spiderman")
    expect(tobeyMaguire.age).toBe(31)
    expect(tobeyMaguire.actor).toBe("Tobey Maguire")
    expect(tobeyMaguire.movies).toBe(3)
    expect(tobeyMaguire.studio).toBe("Columbia_Pictures")
  });

  test('2) Use the method getInfo()', () => {
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
  })
})