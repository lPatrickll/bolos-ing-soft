class Game {
    constructor() {
        this.totalScore = 0;
    }

    roll(pins) {
        this.totalScore += pins;
    }

    score() {
        return this.totalScore;
    }
}

export default Game;