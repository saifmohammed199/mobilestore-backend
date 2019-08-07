const express = require('express')
const knex = require('knex')

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
const app = express()

app.get('/',(req,res)=>{
    database.select('*').from('items').then(user=>{
        console.log(user)
    })
})
app.listen(3000, () => {
  console.log('running')
})
