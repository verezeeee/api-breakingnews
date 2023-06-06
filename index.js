const express = require("express")
const userRoute = require("./src/routes/user.route")
const connectDatabase = require('./src/database/db')
const port = 3000
const app = express()

connectDatabase()
app.use(express.json())
app.use('/user', userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!!`))
/*
ROTA
    -Método HTTP - CRUD(CREATE, READ, UPDATE, DELETE)
        --/GET - Pega uma info
        --/POST - Cria uma info
        --/PUT - Altera toda a info
        --/PATH - Altera parte da info
        --/DELETE - Apaga uma info

    -Name - Um identificador da rota

    -Function (Callback) - Responsável por executar algum comando
*/
/*app.get("/soma", (req, res) => {
    const soma = 100 + 1

    res.send({soma: soma})
})*/

