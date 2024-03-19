import Game from "./claseGame";

let g;

beforeEach(() => {
  g = new Game();
});

function rollMany(n, pins) {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
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

  it("deberia mostrar el score 16", () => {
    g.roll(5);
    g.roll(5); // spare
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toEqual(16);
  });
});