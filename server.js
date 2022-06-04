import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

// SERVER - Está sendo utilizado apenas iniciar o
//  servidor fazer como que ele saia por uma porta