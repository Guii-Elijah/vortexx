<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"><br>
 </div>
 

## Um projeto totalmente livre
Nós da sempre nos preocupamos em ajudar entusiastas em programação ou pessoas que se interessam pelo assunto, assim então decidimos criar projetos de codigo 100% livre para ajudar estudantes ou novatos da área a se familiarizarem com códigos úteis e interessantes!
  
Fizemos este projeto, visando quem quer se aprofundar mais em bots para o Discord e JavaScript. Combinamos as melhores práticas do JavaScript para criar um bot estruturado simples e funcional que possui funções como Command Handlers, Event Handlers e um comando help bonito e automático!

## Instalação
Após ter clonado o repositorio e extraído todos arquivos. tenha certeza que possui o [npm](https://www.npmjs.com/) e o [node.js 8.0.0](https://nodejs.org/en/) ou mais recente. caso estiver com tudo pronto então execute o seguinte comando no diretorio dos arquivos.

```$ npm install```

Se tudo estiver certo, crie um arquivo com o nome de **.env** seguindo o exemplo do **.env.example** com o seguinte comando:

Para Windows: `$ copy .env.example .env`

Para Linux: `$ cp .env.example .env`

| Opção        | Descrição                        | Obrigatório? |
| ------------ | -------------------------------- | ------------ |
| AUTH_TOKEN   | Token de autenticação do seu bot | sim          |
| PREFIX       | Prefixo dos comandos             | sim          |
| GAME         | O que vai aparecer no Jogando... | não          |
| APRESENTACAO | ID do canal de apresentação      | não          |
| GREETCHANNEL | ID do canal de bem vindo         | não          |
| SUGESTOES    | ID do canal de sugestões         | não          |
| DESAFIOS     | ID do canal de desafios          | não          |

Então agora você poderá iniciar seu bot... utilizando

```$ npm start```

Caso a saída seja a seguinte, o bot ja estará completamente pronto e online...

```
log Carregando o total de X comandos.
log Carregando comando: x
(...)
log Carregando o total de X eventos
log O Bot foi iniciado completamente com XX usuarios em XX servidores
```

## Links
* [Servidor Area da programação](https://discord.gg/FQGk5XT)

## Ajuda
Caso tenha alguma dificuldade em entender este codigo ou por onde começar também poderá nos contatar em nosso servidor do Discord.
