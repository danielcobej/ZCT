// 1:44:00
const PORT=8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.user(cors())
app.use(express.json())

// https://327d8cc4-4af8-4dff-bade-cd7ee5cd3209-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/reservations/collections/reservations  OBJECT
// const url = 'https://327d8cc4-4af8-4dff-bade-cd7ee5cd3209-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/reservations/collections' COLLECTION
const url ='https://327d8cc4-4af8-4dff-bade-cd7ee5cd3209-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/reservations/collections/reservations'
const token= 'AstraCS:yEyEvbzIAJdHUxsWoTpnXNsq:0e1b69aa4221bf12a67c69655b84e28ba5b63622b5fcf2900d855ce8811e0aa0'

app.post('/reservations', async(req,res) => {
    const formData = req.body.formData
    // 1:51:00
    const options = {
        method: 'PORT',
        headers:{
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try{
        const response = await axios(url, options)
        res.status(200).json(response.data)
    }
    catch (err){
        console.log(err)
        res.status(500).json({message: err})
    }



})



app.listen(PORT,() => console.log('server running on PORT'+ PORT))


                    ///ASTRA DB DATA JSON
// {
//     "category: "q1 2022",
//     "title: "Moja mama vari lepsie ako tvoja",
//     "owner: "Hotel",
//     "photo: "https://www.freecodecamp.org/news/content/images/size/w150/2020/09/kealan.jpg",
//     "status: "obsadena",
//     "priority: 2,
//     "progress: 40,
//     "description: "prosim rezervaciu",
//     "timestamp": "2022-02-11T07:36:17+0000"
// }