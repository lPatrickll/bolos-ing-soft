describe("Bolos", () => {
  it("deberia mostrar 0", () => {
    const g = new Game();
    for (let i = 0; i < 20; i++){
        g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
});

class Game{
    roll(){}
    score(){
        return 0;
    }
}