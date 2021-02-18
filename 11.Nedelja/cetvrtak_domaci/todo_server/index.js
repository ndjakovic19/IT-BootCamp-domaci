import express from 'express'

const app = express()

app.use(express.json())


const todos = [
    {
        id: 1,
        text: 'dsjhfsdjk',
        done: true
    }
]
const PORT = 3005
app.listen(PORT,()=>{
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
})

// Рута за читање целог низа

app.get('/todos/', (request, response) => {
    response.json(todos)
})

// Рута за читање једног елемента (по id)

app.get('/todos/:id', (request, response) => {
    const id = request.params.id
    const todo = todos.find(todo => todo.id == id)
    if (todo) {
        response.json(todo)
    }
    else {
        response.status(404).end()
    }
})

// Рута за брисање једног елемента (по id)

app.delete('/todos/:id', (request, response) => {
    const id = request.params.id
    todos = todos.filter(todo => todo.id != id)

    response.status(204).end()
})

// Рута за додавање елемента

app.post('/todos', (request, response) => {
    const id = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1
    const todo = request.body
    todo.id = Number(id)
    todos = todos.concat(todo)

    response.status(201).end()
})

// Рута за мењање елемента (по id)

app.patch('/todos/:id', (request, response) => {

})


