class Hungman {
    constructor(word) {
        this.guessedLetters = []
        this.wordFull = word;
        this.numberOFguesses = 6;
        this.word = word.toLowerCase().split('');
        this.status = 'Not started';
    }
    get puzzle() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter < 'a' || letter > 'z') {
                puzzle += letter;
            }
            else {
                puzzle += '*';
            }
        })
        return puzzle;
    }
    ChangeStatus() {
        if (this.numberOFguesses === 0) {
            this.status = 'failed';
        }
        else {
            if (!(this.puzzle.includes('*'))) {
                this.status = 'Winner!';
            }
        }
    }
    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase();
            const isUnique = !this.guessedLetters.includes(guess);
            const isBadGuess = !this.word.includes(guess);
            if (isUnique && this.numberOFguesses > 0) {
                this.guessedLetters.push(guess);
            }
            if (isBadGuess  && this.numberOFguesses > 0 && isUnique) {
                this.numberOFguesses--;
            }
            if (this.numberOFguesses !== 6) {
                document.querySelector('#picture').src = `media/${this.numberOFguesses}.png`;
            }
        }
    }
    ChangeAll() {
        if (this.status === 'failed') {
            document.body.style.backgroundImage = 'url(media/failed.png)';
            document.querySelector('#status').style.color = 'red';
            document.querySelector('#picture').src = 'media/DEAD.png';
            document.querySelector('#word').style.color = 'black'
            document.querySelector('#indication').innerHTML = 'What a pity!'
            document.querySelector('#thanks').innerHTML= 'Thanks for playing!'
            document.querySelector('#indication').style.color = 'red'
            alert(`Too bad! It was : ${this.wordFull}. Press F5 to play again`);
        }
        else if (this.status === 'Winner!') {
            document.body.style.backgroundImage = 'url(media/winner.jpg)';
            document.querySelector('#status').style.color = 'green';
            document.querySelector('#picture').src = 'media/ALIVE.png';
            document.querySelector('#word').style.color = 'yellow'
            document.querySelector('#indication').innerHTML = 'Good job!'
            document.querySelector('#thanks').innerHTML= 'Thanks for playing!'
            document.querySelector('#indication').style.color = 'yellow'
            alert('Congratulations! Press F5 to play again!');
        }
    }
}