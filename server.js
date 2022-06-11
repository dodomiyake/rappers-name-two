const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'mi': {
        'age': 40,
        'birthName': 'Jude Lemfani Abaga',
        'birthLocation': 'Jos, Plateau State'
    },

    'vector': {
        'age': 37,
        'birthName': 'Olanrewaju Ogunmefun David',
        'birthLocation': 'Ikeja, Lagos State'
    },

    'reminisce': {
        'age': 41,
        'birthName': 'Remilekun Abdulkalid Safaru',
        'birthLocation': 'Kaduna, Kaduna State'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['reminisce'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it`)
})