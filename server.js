import express  from 'express'
import sqlite3 from "sqlite3";

const db =  new sqlite3.Database('./banco.db')

db.run(`CREATE TABLE IF NOT EXISTS cadrasto ( id INTEGER PRIMARY KEY  AUTOINCREMENT, nome TEXT NOT NULL, email TEXT NOT NULL, idade TEXT NOT NULL)`)




const app = express()


app.use(express.json())// Fazendo o express trabalhar com o json

const user = []

app.post('/users',(req,res)=>{

   user.push(req.body)// estou mandando o user pegar as requisições do body
    res.send("ok de bonzinho")
})

app.get('/users', (req, res) =>{
    res.json(user)
}  )// estudar metodos https 

app.listen(5050)