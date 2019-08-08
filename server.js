const express = require('express')
const knex = require('knex')
const cors = require('cors')


const app = express()
app.use(cors())
const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'mobilestore'
    },
  });

// console.log(database.select('*').from('items'))


app.get('/',(req,res)=>{
    database.select('*').from('items').then(user=>{
        res.json(user)
      })
})
app.listen(3000, () => {
  console.log('running')
})
