const getPuzzleSync = () => {
    const request = new XMLHttpRequest() // interact with servers without leaving the actual page
    request.open('GET','http://puzzle.mead.io/puzzle?wordCount=1',false)
    request.send() 
        if (request.readyState===4 && request.status ===200) {
            const data = JSON.parse(request.responseText)
            return(data.puzzle)
        } else if (request.readyState ===4) {
            throw new Error ('Error!')
        }
}

const getPuzzle = (wordCount=1) =>  {
    fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=> {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error ('unable to fetch puzzle')
        }
    }).then((data)=> {
        return data.puzzle
    }) 
}
const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response)=> {
        if (response.status===200) {
            return response.json()
        } else {
            throw new Error('unable to fetch country')    
        }
    }).then((data)=>{
        const country = data.find((country)=> country.alpha2Code === countryCode)
        return country
    })
}

const getLocation = ()=> {
    return fetch('http://ipinfo.io/json?token=c671824bfcc880').then((response)=>{
        if (response.status===200) {
            return response.json()
        }
        else {
            throw new Error('unable to fetch location')
        }
    })
}