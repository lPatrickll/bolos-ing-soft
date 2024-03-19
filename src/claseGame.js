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
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                score += 10 + this.strkeBonus(frameIndex);
                frameIndex++;
            }else if(this.isSpare(frameIndex)){
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                score += this.sunOfBallsInFrame(frameIndex);
                frameIndex += 2;
            }
        }
        return score;
    }

    isStrike(frameIndex) {
        return this._rolls[frameIndex] === 10;
    }

    isSpare(frameIndex) {
        return (this.sunOfBallsInFrame(frameIndex) === 10);
    }

    sunOfBallsInFrame(frameIndex) {
        return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
    }

    spareBonus(frameIndex) {
        return this._rolls[frameIndex + 2];
    }

    strkeBonus(frameIndex) {
        return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
    }
}

export default Game;