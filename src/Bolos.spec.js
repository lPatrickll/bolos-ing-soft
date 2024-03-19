import Game from "./claseGame";

const g = new Game();

function rollMany(n, pins){
  for (let i = 0; i < n; i++)
    g.roll(pins);
}

describe("Bolos", () => {
  it("deberia mostrar 0", () => {
    rollMany(20, 0);
    expect(g.score()).toEqual(0);
  });

  it("deberia mostrar el score 20", () => {
    rollMany(20, 1);
    expect(g.score()).toEqual(20);
  });
});