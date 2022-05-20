


// Desafio 1


// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


// Resposta

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// or/answer2

// let employee: {code: number, name: string} = {
//     code: 10,
//     name: 'joao'
// }


///////////////////////////////////////////////////////////////////////////////////////////

// Desafio 2

// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }





//  Resposta Desafio 2

// enum Trabalho {
//     Atriz,
//     Padeiro,
// }

// type Humano = {
//     nome: string,
//     idade: number,
//     profissao: Trabalho
// }

// let pessoa1: Humano = {
//     nome: 'maria',
//     idade: 29,
//     profissao: Trabalho.Atriz
// };

// let pessoa2: Humano = {
//     nome: 'roberto',
//     idade: 19,
//     profissao: Trabalho.Padeiro
// };

// let pessoa3: Humano = {
//     nome: 'laura',
//     idade: 32,
//     profissao: Trabalho.Atriz
// };

// let pessoa4: Humano = {
//     nome: "carlos",
//     idade: 19,
//     profissao: Trabalho.Padeiro
// }



////////////////////////////////////////////////////////////////////////////////////////////////////


// Desafio 3


// Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai funcionar da melhor forma.
// No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:

//     document.getElementById('limpar-saldo')!;

// A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
// Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
// */
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo')!;
// let soma = document.getElementById('soma')! as HTMLInputElement;
// let campoSaldo = document.getElementById('campo-saldo');

// let saldoTotal = 0

// limparSaldo()

// function somarAoSaldo(soma: number) {
// if (campoSaldo) {
//     saldoTotal += soma
//     campoSaldo.innerHTML = saldoTotal.toString();
//     limparCampoSoma();
// }
// }

// function limparCampoSoma() {
// soma.value = "";
// }

// function limparSaldo() {
// if (campoSaldo) {
//     saldoTotal = 0;
//     campoSaldo.innerHTML = saldoTotal.toString();
// }
// }

// if (botaoAtualizar) {
// botaoAtualizar.addEventListener('click', () => {
//     somarAoSaldo(Number(soma.value)); 
// });
// }
// botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
// limparSaldo();
// });





/**
<h4>Valor a ser adicionado: <input id="soma"> </h4>
<button id="atualizar-saldo">Atualizar saldo</button>
<button id="limpar-saldo">Limpar seu saldo</button>
<h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>

Colei essa esturura no index.html

*/


// Resposta Desafio 3


// export {} // Para não reclamar de variáveis duplicadas
/** 
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo')!;
// let soma = document.getElementById('soma')! as HTMLInputElement;
// let campoSaldo = document.getElementById('campo-saldo');

// let saldoTotal = 0

// limparSaldo()

// function somarAoSaldo(soma: number) {
//     if (campoSaldo) {
//         saldoTotal += soma
//         campoSaldo.innerHTML = saldoTotal.toString();
//         limparCampoSoma();
//     }
// }

// function limparCampoSoma() {
//     soma.value = "";
// }

// function limparSaldo() {
//     if (campoSaldo) {
//         saldoTotal = 0;
//         campoSaldo.innerHTML = saldoTotal.toString();
//     }
// }

// if (botaoAtualizar) {
//     botaoAtualizar.addEventListener('click', () => {
//         somarAoSaldo(Number(soma.value)); 
//     });
// }
// botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
//     limparSaldo();
// });

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>

    Colei essa parte no Index.html
 */


///////////////////////////////////////////////////////////////////////////////////




    // Desafio 4




    // Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

// var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
// let apiKey;
// let requestToken;
// let username;
// let password;
// let sessionId;
// let listId = '7101979';

// let loginButton = document.getElementById('login-button');
// let searchButton = document.getElementById('search-button');
// let searchContainer = document.getElementById('search-container');

// loginButton.addEventListener('click', async () => {
//   await criarRequestToken();
//   await logar();
//   await criarSessao();
// })

// searchButton.addEventListener('click', async () => {
//   let lista = document.getElementById("lista");
//   if (lista) {
//     lista.outerHTML = "";
//   }
//   let query = document.getElementById('search').value;
//   let listaDeFilmes = await procurarFilme(query);
//   let ul = document.createElement('ul');
//   ul.id = "lista"
//   for (const item of listaDeFilmes.results) {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(item.original_title))
//     ul.appendChild(li)
//   }
//   console.log(listaDeFilmes);
//   searchContainer.appendChild(ul);
// })

// function preencherSenha() {
//   password = document.getElementById('senha').value;
//   validateLoginButton();
// }

// function preencherLogin() {
//   username =  document.getElementById('login').value;
//   validateLoginButton();
// }

// function preencherApi() {
//   apiKey = document.getElementById('api-key').value;
//   validateLoginButton();
// }

// function validateLoginButton() {
//   if (password && username && apiKey) {
//     loginButton.disabled = false;
//   } else {
//     loginButton.disabled = true;
//   }
// }

// class HttpClient {
//   static async get({url, method, body = null}) {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();
//       request.open(method, url, true);

//       request.onload = () => {
//         if (request.status >= 200 && request.status < 300) {
//           resolve(JSON.parse(request.responseText));
//         } else {
//           reject({
//             status: request.status,
//             statusText: request.statusText
//           })
//         }
//       }
//       request.onerror = () => {
//         reject({
//           status: request.status,
//           statusText: request.statusText
//         })
//       }

//       if (body) {
//         request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         body = JSON.stringify(body);
//       }
//       request.send(body);
//     })
//   }
// }

// async function procurarFilme(query) {
//   query = encodeURI(query)
//   console.log(query)
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
//     method: "GET"
//   })
//   return result
// }

// async function adicionarFilme(filmeId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
//     method: "GET"
//   })
//   console.log(result);
// }

// async function criarRequestToken () {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
//     method: "GET"
//   })
//   requestToken = result.request_token
// }

// async function logar() {
//   await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
//     method: "POST",
//     body: {
//       username: `${username}`,
//       password: `${password}`,
//       request_token: `${requestToken}`
//     }
//   })
// }

// async function criarSessao() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
//     method: "GET"
//   })
//   sessionId = result.session_id;
// }

// async function criarLista(nomeDaLista, descricao) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       name: nomeDaLista,
//       description: descricao,
//       language: "pt-br"
//     }
//   })
//   console.log(result);
// }

// async function adicionarFilmeNaLista(filmeId, listaId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       media_id: filmeId
//     }
//   })
//   console.log(result);
// }

// async function pegarLista() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
//     method: "GET"
//   })
//   console.log(result);
// }





    /////////////  // Está no index.html

/* <div style="display: flex;">
  <div style="display: flex; width: 300px; height: 100px; justify-content: space-between; flex-direction: column;">
      <input id="login" placeholder="Login" onchange="preencherLogin(event)">
      <input id="senha" placeholder="Senha" type="password" onchange="preencherSenha(event)">
      <input id="api-key" placeholder="Api Key" onchange="preencherApi()">
      <button id="login-button" disabled>Login</button>
  </div>
  <div id="search-container" style="margin-left: 20px">
      <input id="search" placeholder="Escreva...">
      <button id="search-button">Pesquisar Filme</button>
  </div>
</div>*/