import express  from 'express'





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