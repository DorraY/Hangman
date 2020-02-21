// product -> object.prototype -> null
// primitive value : string number boolean null undefined

// object : myObject -> object.protorype -> null
// array: myArray -> array.protorype - > object.protorype -> null
// function: myFunction -> function.prototype -> object.protorype -> null
// string : myString -> string.prototype - > object.prototype -> null
// number : myNumber -> number.prototype -> obejct.protype -> null
// boolean : myBoolean -> boolean.protype -> object.protype -> null

// hypertext transfer protocol
// request - what do we want to do
// reponse - what was actually done

// making http request

// getPuzzle(2).then((puzzle)=> {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`errors ${err}`)
// }) 

const puzzle = getPuzzleSync()
console.log(puzzle)

// fetch('http://puzzle.mead.io/puzzle',{}).then((response)=> {
//     if (response.status===200) {
//         return response.json()
//     }
//     else {
//         throw new Error('unable to fetch puzzle')
//     }
// }).then((data)=> {
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })
const game = new Hungman(puzzle)
document.querySelector('#status').textContent = game.status
document.querySelector('#status').style.color = 'blue'
window.addEventListener('keypress',(e) => {

getLocation().then((location)=>{
    document.querySelector('#ip').innerHTML = `Your current ip ${location.ip}`
    document.querySelector('#city').innerHTML = `Your current region ${location.region}`  
    getCountry(location.country).then((country) => {
        document.querySelector('#nation').innerHTML = `You are browsing from ${country.name}`
    }).catch((err)=> {
        console.log(`error : ${err}`)
    })
      
}).catch((err)=> {
    console.log(`error ${err}`)
})

document.querySelector('audio').play()
document.querySelector('#indication').style.color = 'purple'
document.querySelector('#indication').innerHTML = 'Good luck!'
const guess = String.fromCharCode(e.charCode)
if ((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >=97 && e.charCode <= 122)) {
    game.makeGuess(guess)
}    
document.querySelector('#remaining-guess').textContent = game.numberOFguesses
document.querySelector('#word').textContent = game.puzzle
document.querySelector('#guessed-letters').textContent = game.guessedLetters
game.status='playing'
document.querySelector('#status').style.color = 'purple'
game.ChangeStatus()
document.querySelector('#status').textContent = game.status
game.ChangeAll()  })