class Game {
    constructor() {
        this.totalScore = 0;
        this._rolls = new Array(21).fill(0);
        this._currentRoll = 0;
    }

    roll(pins) {
        this._rolls[this._currentRoll++] = pins;
    }

    score() {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            score += this._rolls[i] + this._rolls[i + 1];
            i += 2;
        }
        return score;
    }
}

export default Game;