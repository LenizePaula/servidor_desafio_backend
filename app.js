const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const clientesRouter = require('./src/routes/clientes');
const produtosRouter = require('./src/routes/produtos');

dotenv.config();

const app = express();

app
    .use(bodyParser.json())
    .use('/produtos', produtosRouter)
    .use('/clientes', clientesRouter)
    .use((req, res) => {
      res.status(404).send('Página não encontrada');
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server in port: ${PORT}`);
});
