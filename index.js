const express = require('express');
const helmet = require('helmet'); // 1. Importe o helmet
const app = express();
const port = 3000;

// 2. Aplique o helmet como middleware para proteger contra várias vulnerabilidades de cabeçalhos
app.use(helmet()); 

app.get('/', (req, res) => {
  // Vulnerabilidade proposital: Reflected XSS
  // (O helmet protege os headers, mas este ponto de injeção continuará sendo um alerta 
  // para você mostrar aos alunos como o DAST detecta entrada maliciosa)
  res.send(`<h1>Olá, bem-vindo!</h1><p>Seu parâmetro de busca foi: ${req.query.nome}</p>`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
