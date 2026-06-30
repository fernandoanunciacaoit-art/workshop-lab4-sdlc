const express = require('express');
const app = express();
const port = 3000;

// O uso do helmet seria a correção, mas propositalmente não vamos usá-lo aqui
// para que o OWASP ZAP encontre a falta de cabeçalhos de segurança.

app.get('/', (req, res) => {
  // Vulnerabilidade proposital: Reflected XSS
  // O ZAP vai capturar que o parâmetro 'nome' não está sendo sanitizado.
  res.send(`<h1>Olá, bem-vindo!</h1><p>Seu parâmetro de busca foi: ${req.query.nome}</p>`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
