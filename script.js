/* =========================================================
   Atividade prática: consumo de API REST com fetch()
   API: JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
   ========================================================= */

const URL_API = "https://jsonplaceholder.typicode.com/posts";

// 1. Faz a requisição à API
fetch(URL_API)
  .then((resposta) => {
    // Verifica se o servidor respondeu com sucesso (status 200 a 299)
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: status ${resposta.status}`);
    }
    // 2. Converte a resposta para JSON
    return resposta.json();
  })
  .then((publicacoes) => {
    console.log(`Total de publicações recebidas: ${publicacoes.length}`);
    console.log("=".repeat(60));

    // 3. Percorre cada publicação com uma estrutura de repetição
    for (const publicacao of publicacoes) {
      // 4. Exibe os campos id, title e body
      console.log(`ID: ${publicacao.id}`);
      console.log(`TITLE: ${publicacao.title}`);
      console.log(`BODY: ${publicacao.body}`);
      // Separador entre as publicações
      console.log("-".repeat(60));
    }
  })
  // 5. Tratamento de erros (falha de rede, status inválido ou JSON inválido)
  .catch((erro) => {
    console.error("Não foi possível consultar a API:", erro.message);
  });
